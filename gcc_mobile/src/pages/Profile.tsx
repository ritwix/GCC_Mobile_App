import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react';
import { User, UserStats, useUserContext } from '../context/user';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import PageHeader from '../components/PageHeader';
import {
  RegistrationForm,
  RegistrationFormFields,
} from '../components/RegistrationForm';
import './Profile.css';
import {
  Region,
  GCC_BASE_URL,
  regionNameMap,
  GITHUB_OAUTH_CLIENT_ID,
  API_AUTHENTICATION,
} from '../constants';
import { submitQuery } from '../components/SupportQueryContainer';

const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_OAUTH_CLIENT_ID.PROD}`;

const authorizeWithBackend = (code: string) => {
  return axios
    .get<any>(`${GCC_BASE_URL}/github/login/${code}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    })
    .then((response) => {
      const qrCodeLink = `https://credit-suisse.com/pwp/hr/en/codingchallenge/#/howtoplay?promocode=${response?.data?.login}`;
      return {
        token: code,
        loggedInGitHub: true,
        githubUsername: response?.data?.login,
        qrCodeLink: qrCodeLink,
        contestantId: response?.data?.contestantId,
        githubAvatar: response?.data?.avatar_url,
      };
    });
};

const getContestant = (githubUsername: string) => {
  if (!githubUsername) {
    return {
      hasUserSignedUp: false,
    };
  }

  return axios
    .get<any>(`${GCC_BASE_URL}/contestant/git/${githubUsername}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    })
    .then((response) => {
      return {
        contestantId: response.data.id,
        contestantName: response.data.name,
        contestantEmail: response.data.email,
        level: response.data.level == null ? 'easy' : response.data.level,
        hasUserSignedUp: true,
      };
    })
    .catch((error) => {
      if (error.response.status == 404) {
        return {
          hasUserSignedUp: false,
        };
      } else {
        throw error;
      }
    });
};

const registerContestant = (body: any, token: string) => {
  return axios.post<any>(`${GCC_BASE_URL}/challenge/signup/${token}`, body, {
    auth: API_AUTHENTICATION,
  });
};

const Profile: React.FC = () => {
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(false);

  const githubLogin = async () => {
    const browser = InAppBrowser.create(GITHUB_OAUTH_URL, '_blank', {
      location: 'yes',
    });
    browser.on('loadstart').subscribe(async (info) => {
      const match = /\?code=(\w*)#\/gitsignin$/.exec(info.url);
      if (match) {
        browser.close();
        const code = match[1];

        setLoading(true);
        const githubUser = await authorizeWithBackend(code);
        const contestant = await getContestant(githubUser?.githubUsername);
        setLoading(false);

        console.log('user:', {
          ...githubUser,
          ...contestant,
        });

        setUser({
          ...githubUser,
          ...contestant,
        });
      }
    });
  };

  const handleRegistrationFormSubmit = (fields: RegistrationFormFields) => {
    if (fields.university === 'Other') {
      let query = {
        submittedBy: `${fields.firstName} ${fields.lastName}`,
        email: fields.email,
        description: `My GitHub Username is: ${fields.githubUsername}. Please add ${fields.otherUniversity} as a new university for the ${fields.region} region.`,
      };
      submitQuery(query);
    }

    const {
      title,
      firstName,
      lastName,
      email,
      region,
      university,
      course,
      graduationYear,
      privacyChecked,
      marketingChecked,
    } = fields;

    const token = user?.token;

    const body = {
      course,
      disclaimers: {
        marketing: marketingChecked,
        privacy: privacyChecked,
      },
      email,
      gitUsername: user?.githubUsername,
      name: `${firstName} ${lastName}`,
      region: regionNameMap[region as Region],
      team: university,
      graduationYear,
      title,
      gitAvatar: user?.githubAvatar,
    };

    setLoading(true);
    console.log('registering contestant');
    registerContestant(body, token || '')
      .then((response) => {
        if (response.status == 200) {
          console.log('registered contestant:', response.data);
          setUser({
            ...response.data,
            hasUserSignedUp: true,
          });
        }
      })
      .catch((err) => {
        console.log('failed to register contestant', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <IonPage>
      <PageHeader title="Profile" />
      <IonContent>
        {!user?.loggedInGitHub && (
          <div className="container">
            <h3>Welcome to the Global Coding Challenge!</h3>
            <button className="cs-button" onClick={githubLogin}>
              Login via Github
            </button>
          </div>
        )}
        {user?.loggedInGitHub && !user.hasUserSignedUp && (
          <RegistrationForm
            githubUsername={user.githubUsername}
            onSubmit={handleRegistrationFormSubmit}
          />
        )}
        {user?.loggedInGitHub && user.hasUserSignedUp && (
          <ProfileDetails user={user} />
        )}
      </IonContent>
    </IonPage>
  );
};

const ProfileDetails: React.FC<{ user: User }> = (props) => {
  const { user } = props;
  const [userStats, setUserStats] = useState<UserStats | null>();

  const loadUserStats = () => {
    setUserStats(null);
    axios
      .get<UserStats>(`${GCC_BASE_URL}/contestant/stats/${user.contestantId}`)
      .then((response) => {
        setUserStats(response.data);
      })
      .catch(() => {
        alert(
          'There was a problem fetching user stats. Please try again later.'
        );
      });
  };

  useEffect(() => {
    loadUserStats();
  }, []);

  const profileDetails = userStats ? (
    <>
      <IonAvatar>
        <img src={userStats.gitAvatar} />
      </IonAvatar>
      <h3>{`Welcome, ${userStats.name}!`}</h3>
      <div className="ranking">{`Total score: ${Number(userStats.total).toFixed(2)}`}</div>
      <br />
      <div className="ranking">{`#${userStats.positionWithinTeam} in ${userStats.team}`}</div>
      <div className="ranking">{`#${userStats.globalPosition} in World`}</div>
      <IonGrid>
        <IonRow className="leaderboard_header question-scores-table-header">
          <IonCol class="ion-text-end" size="2.8">
            Question
          </IonCol>
          <IonCol class="ion-text-end" size="2.4">
            Correct
          </IonCol>
          <IonCol class="ion-text-end" size="2.7">
            Incorrect
          </IonCol>
          <IonCol class="ion-text-end" size="2.1">
            Timed Out
          </IonCol>
          <IonCol class="ion-text-end" size="2">
            Total
          </IonCol>
        </IonRow>
        {userStats.scores.map((item) => {
          const { questionNumber, correct, incorrect, timedOut, total } = item;
          return (
            <IonRow className="leaderboard_content" key={JSON.stringify(item)}>
              <IonCol class="ion-text-end" size="2.8">
                {questionNumber}
              </IonCol>
              <IonCol class="ion-text-end" size="2.4">
                {correct}
              </IonCol>
              <IonCol class="ion-text-end" size="2.7">
                {incorrect}
              </IonCol>
              <IonCol class="ion-text-end" size="2.1">
                {timedOut}
              </IonCol>
              <IonCol class="ion-text-end" size="2">
                {Number(total).toFixed(2)}
              </IonCol>
            </IonRow>
          );
        })}
      </IonGrid>
      <button className="cs-button" onClick={loadUserStats}>
        Refresh
      </button>
    </>
  ) : (
    <h4>Loading...</h4>
  );

  return <div className="profile-details-container">{profileDetails}</div>;
};

export default Profile;
