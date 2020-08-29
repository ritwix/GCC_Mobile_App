import React, { useState } from 'react';
import axios from 'axios';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Profile.css';
import { useUserContext } from '../context/user';
import { InAppBrowser } from '@ionic-native/in-app-browser';

const CLIENT_ID = {
  LOCAL: '3a4fd05f700987052d1e', // GCC-2020-Local Client ID
  TEST: '17add43b05758bd00913', // GCC-2020-Test Client ID
};
const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID.TEST}`;
const GCC_BASE_URL = `https://gcc-global-dev.herokuapp.com`;

const Profile: React.FC = () => {
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(false);

  const githubLogin = async () => {
    const browser = InAppBrowser.create(GITHUB_OAUTH_URL, '_blank', {
      location: 'yes',
    });
    browser.on('loadstart').subscribe((info) => {
      const match = /\?code=(\w*)#\/gitsignin$/.exec(info.url);
      if (match) {
        browser.close();
        const code = match[1];
        authorizeWithBackend(code);
      }
    });
  };

  const authorizeWithBackend = (code: string) => {
    if (!code) return;

    const access_token_url = `${GCC_BASE_URL}/github/login/${code}`;

    setLoading(true);

    axios
      .get<any>(access_token_url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        if (response.status == 200) {
          const qrCodeLink = `https://credit-suisse.com/pwp/hr/en/codingchallenge/#/howtoplay?promocode=${response?.data?.login}`;
          setUser({
            loggedInGitHub: true,
            githubUsername: response?.data?.login,
            qrCodeLink: qrCodeLink,
            contestantId: response?.data?.contestantId,
            githubAvatar: response?.data?.avatar_url,
          });
        }
      })
      .catch((error) => {
        console.error('error', error);
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          {user?.loggedInGitHub ? (
            <>
              <IonAvatar>
                <img src={user.githubAvatar} />
              </IonAvatar>
              <strong>{`Welcome, ${user?.githubUsername}!`}</strong>
            </>
          ) : (
            <button
              className="cs-button"
              style={{ fontSize: 20 }}
              onClick={githubLogin}
            >
              Login via Github
            </button>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
