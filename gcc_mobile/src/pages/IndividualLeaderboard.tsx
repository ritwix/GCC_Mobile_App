import React from 'react';
import axios from 'axios';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonLoading,
} from '@ionic/react';
import './IndividualLeaderboard.css';
import {
  IndLeaderContainer,
  UnivLeaderContainer,
  EngagementLeaderContainer,
} from '../components/LeaderboardContainer';
import PageHeader from '../components/PageHeader';

const GetIndLeader = (lowerLim: number, upperLim: number, region: string) => {
  var urlWithLimit =
    'https://gcc-global-dev.herokuapp.com/leaderboard/' +
    region +
    '?from=' +
    String(lowerLim) +
    '&limit=' +
    String(upperLim);
  return axios({
    url: urlWithLimit,
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const GetUnivLeader = (lowerLim: number, upperLim: number, region: string) => {
  var urlWithLimit =
    'https://gcc-global-dev.herokuapp.com/teamleaderboard/' +
    region +
    '?from=' +
    String(lowerLim) +
    '&limit=' +
    String(upperLim);
  return axios({
    url: urlWithLimit,
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const GetEngagementLeader = (
  lowerLim: number,
  upperLim: number,
  region: string
) => {
  var urlWithLimit =
    'https://gcc-global-dev.herokuapp.com/engagementLeaderboard/' +
    region +
    '?from=' +
    String(lowerLim) +
    '&limit=' +
    String(upperLim);
  return axios({
    url: urlWithLimit,
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const IndLeaderboard: React.FC = () => {
  //default region = GLOBAL
  const [Region, setRegion] = React.useState<string>('GLOBAL');

  const [IndItems, setIndItems] = React.useState([]);
  React.useEffect(() => {
    GetIndLeader(1, 10000, Region).then((data) =>
      setIndItems(data.contestants)
    );
  }, [Region]);

  const [UnivItems, setUnivItems] = React.useState([]);
  React.useEffect(() => {
    GetUnivLeader(1, 10000, Region).then((data) =>
      setUnivItems(data.contestants)
    );
  }, [Region]);

  const [EngagementItems, setEngagementItems] = React.useState([]);
  React.useEffect(() => {
    GetEngagementLeader(1, 10000, Region).then((data) =>
      setEngagementItems(data.contestants)
    );
  }, [Region]);

  const [IndFilterColumn, setIndFilterColumn] = React.useState<string>('name');
  const [IndFilterBy, setIndFilterBy] = React.useState<string>('');

  const [UnivFilterColumn, setUnivFilterColumn] = React.useState<string>(
    'teamName'
  );
  const [UnivFilterBy, setUnivFilterBy] = React.useState<string>('');

  const [EngagementFilterColumn, setEngagementFilterColumn] = React.useState<
    string
  >('name');
  const [EngagementFilterBy, setEngagementFilterBy] = React.useState<string>(
    ''
  );

  const [leaderboardType, setLeaderboardType] = React.useState<string>(
    'Individual'
  );

  const [IconLoading, setIconLoading] = React.useState<boolean>(false);

  return (
    <IonPage>
      <PageHeader title="Leaderboard" />
      <IonLoading isOpen={IconLoading}></IonLoading>
      <div className="filter-column">
        {['Individual', 'University', 'Engagement'].map((leaderboardType) => (
          <button
            className="cs-button"
            onClick={() => {
              setLeaderboardType(leaderboardType);
            }}
          >
            {leaderboardType}
          </button>
        ))}
      </div>

      <IonContent>
        <div className="filter-column">
          <IonLabel>Select Region:</IonLabel>
          <IonSelect
            placeholder="GLOBAL"
            onIonChange={(e) => setRegion(e.detail.value)}
          >
            <IonSelectOption value="GLOBAL">Global</IonSelectOption>
            <IonSelectOption value="AMC">USA & Canada</IonSelectOption>
            <IonSelectOption value="INDIA">India</IonSelectOption>
            <IonSelectOption value="EUROPE">Europe</IonSelectOption>
            <IonSelectOption value="SEA">South East Asia</IonSelectOption>
            <IonSelectOption value="SWIS">Switzerland</IonSelectOption>
            <IonSelectOption value="UK">UK & Ireland</IonSelectOption>
            <IonSelectOption value="ROW">Rest of the World</IonSelectOption>
          </IonSelect>
        </div>
        <div hidden={!(leaderboardType === 'Individual')}>
          <div className="filter-column">
            <IonLabel>Filter By:</IonLabel>
            <IonSelect
              placeholder="Name"
              onIonChange={(e) => setIndFilterColumn(e.detail.value)}
            >
              <IonSelectOption value="pos">Rank</IonSelectOption>
              <IonSelectOption value="name">Name</IonSelectOption>
              <IonSelectOption value="region">Region</IonSelectOption>
              <IonSelectOption value="teamName">University</IonSelectOption>
            </IonSelect>

            <IonInput
              value={IndFilterBy}
              placeholder="Search"
              onIonChange={(e) => setIndFilterBy(e.detail.value!)}
            >
              Search:
            </IonInput>
          </div>
          <IonGrid>
            <IonRow className="leaderboard_header">
              <IonCol size="1">#</IonCol>
              <IonCol size="3">Name</IonCol>
              <IonCol size="2.5">Region</IonCol>
              <IonCol size="3">University</IonCol>
              <IonCol size="2.5">Score</IonCol>
            </IonRow>
            {IndItems.map((item) => {
              return IndFilterBy == undefined ||
                IndFilterBy == '' ||
                String(item[IndFilterColumn])
                  .toLocaleLowerCase()
                  .indexOf(IndFilterBy.toLowerCase()) !== -1 ? (
                <IndLeaderContainer
                  Rank={item['pos']}
                  Name={item['name']}
                  Region={item['region']}
                  University={item['teamName']}
                  Score={Number(item['total']).toFixed(2)}
                />
              ) : null;
            })}
          </IonGrid>
        </div>

        <div hidden={!(leaderboardType === 'University')}>
          <div className="filter-column">
            <IonLabel>Filter By:</IonLabel>
            <IonSelect
              placeholder="University"
              onIonChange={(e) => setUnivFilterColumn(e.detail.value)}
            >
              <IonSelectOption value="pos">Rank</IonSelectOption>
              <IonSelectOption value="teamName">University</IonSelectOption>
            </IonSelect>

            <IonInput
              value={UnivFilterBy}
              placeholder="Search"
              onIonChange={(e) => setUnivFilterBy(e.detail.value!)}
            >
              Search:
            </IonInput>
          </div>
          <IonGrid>
            <IonRow className="leaderboard_header">
              <IonCol size="2">#</IonCol>
              <IonCol size="5">University</IonCol>
              <IonCol size="5">Score</IonCol>
            </IonRow>
            {UnivItems.map((item) => {
              return UnivFilterBy == undefined ||
                UnivFilterBy == '' ||
                String(item[UnivFilterColumn])
                  .toLocaleLowerCase()
                  .indexOf(UnivFilterBy.toLowerCase()) !== -1 ? (
                <UnivLeaderContainer
                  Rank={item['pos']}
                  University={item['teamName']}
                  Score={Number(item['total']).toFixed(2)}
                />
              ) : null;
            })}
          </IonGrid>
        </div>

        <div hidden={!(leaderboardType === 'Engagement')}>
          <div className="filter-column">
            <IonLabel>Filter By:</IonLabel>
            <IonSelect
              placeholder="Name"
              onIonChange={(e) => setEngagementFilterColumn(e.detail.value)}
            >
              <IonSelectOption value="pos">Rank</IonSelectOption>
              <IonSelectOption value="name">Name</IonSelectOption>
              <IonSelectOption value="region">Region</IonSelectOption>
              <IonSelectOption value="teamName">University</IonSelectOption>
            </IonSelect>

            <IonInput
              value={EngagementFilterBy}
              placeholder="Search"
              onIonChange={(e) => setEngagementFilterBy(e.detail.value!)}
            >
              Search:
            </IonInput>
          </div>
          <IonGrid>
            <IonRow className="leaderboard_header">
              <IonCol>#</IonCol>
              <IonCol>Name</IonCol>
              <IonCol>Region</IonCol>
              <IonCol>University</IonCol>
              <IonCol>Badges</IonCol>
              <IonCol>Score</IonCol>
            </IonRow>
            {EngagementItems.map((item) => {
              return EngagementFilterBy == undefined ||
                EngagementFilterBy == '' ||
                String(item[EngagementFilterColumn])
                  .toLocaleLowerCase()
                  .indexOf(EngagementFilterBy.toLowerCase()) !== -1 ? (
                <EngagementLeaderContainer
                  Rank={item['pos']}
                  Name={item['name']}
                  Region={item['region']}
                  University={item['teamName']}
                  NumberOfBadges={'0'}
                  Score={Number(item['total']).toFixed(2)}
                />
              ) : null;
            })}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IndLeaderboard;
