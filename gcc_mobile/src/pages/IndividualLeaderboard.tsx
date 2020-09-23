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
  IonButton,
  IonLoading,
} from '@ionic/react';
import './IndividualLeaderboard.css';
import {
  IndLeaderContainer,
  UnivLeaderContainer,
  EngagementLeaderContainer,
} from '../components/LeaderboardContainer';
import PageHeader from '../components/PageHeader';
import { codingChallengeStarted } from '../CompetitionTimer';

const GetIndLeader = (
  lowerLim: number,
  numberOfRows: number,
  region: string
) => {
  var urlWithLimit =
    'https://gcc-backend-dev-temp.herokuapp.com/leaderboard/' +
    region +
    '?from=' +
    String(lowerLim) +
    '&limit=' +
    String(numberOfRows);
  return axios({
    url: urlWithLimit,
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const GetUnivLeader = (
  lowerLim: number,
  numberOfRows: number,
  region: string
) => {
  var urlWithLimit =
    'https://gcc-backend-dev-temp.herokuapp.com/teamleaderboard/' +
    region +
    '?from=' +
    String(lowerLim) +
    '&limit=' +
    String(numberOfRows);
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
  numberOfRows: number,
  region: string
) => {
  var urlWithLimit =
    'https://gcc-backend-dev-temp.herokuapp.com/engagementLeaderboard/' +
    region +
    '?from=' +
    String(lowerLim) +
    '&limit=' +
    String(numberOfRows);
  return axios({
    url: urlWithLimit,
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const RegionMapper = (region: string) => {
  var mappedRegion: string;
  if (region === 'GLOBAL') mappedRegion = 'GLOBAL';
  else if (region === 'INDIA') mappedRegion = 'India';
  else if (region === 'EUROPE') mappedRegion = 'Europe';
  else if (region === 'AMC') mappedRegion = 'USA & Canada';
  else if (region === 'SEA') mappedRegion = 'South East Asia';
  else if (region === 'SWIS') mappedRegion = 'Switzerland';
  else if (region === 'UK') mappedRegion = 'UK and Ireland';
  else mappedRegion = 'Rest of the world';

  return mappedRegion;
};

const IndLeaderboard: React.FC = () => {
  //default region = GLOBAL
  const [Region, setRegion] = React.useState<string>('GLOBAL');
  const [lowerLim, setLowerLim] = React.useState(1);
  const numberOfRows = 30;

  const [IndItems, setIndItems] = React.useState([]);
  React.useEffect(() => {
    GetIndLeader(lowerLim, numberOfRows, Region).then((data) =>
      setIndItems(data.contestants)
    );
  }, [Region]);

  const [UnivItems, setUnivItems] = React.useState([]);
  React.useEffect(() => {
    GetUnivLeader(lowerLim, numberOfRows, Region).then((data) =>
      setUnivItems(data.contestants)
    );
  }, [Region]);

  const [EngagementItems, setEngagementItems] = React.useState([]);
  React.useEffect(() => {
    GetEngagementLeader(lowerLim, numberOfRows, Region).then((data) =>
      setEngagementItems(data.contestants)
    );
  }, [Region]);

  const getMoreData = (lowerLim: number) => {
    GetIndLeader(lowerLim + numberOfRows, numberOfRows, Region).then((data) =>
      setIndItems(IndItems.concat(data.contestants))
    );
    GetUnivLeader(lowerLim + numberOfRows, numberOfRows, Region).then((data) =>
      setUnivItems(UnivItems.concat(data.contestants))
    );
    GetEngagementLeader(
      lowerLim + numberOfRows,
      numberOfRows,
      Region
    ).then((data) =>
      setEngagementItems(EngagementItems.concat(data.contestants))
    );
  };

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

  return (
    <IonPage>
      <PageHeader title="Leaderboard" />
      <div className="button-row">
        {['Individual', 'University', 'Engagement'].map((type) => {
          const styles =
            leaderboardType === type
              ? {
                  backgroundColor: 'black',
                  color: 'white',
                }
              : {};
          return (
            <button
              key={type}
              className="button-tab"
              style={styles}
              onClick={() => {
                setLeaderboardType(type);
              }}
            >
              {type}
            </button>
          );
        })}
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
            <input
              style={{width: '45%'}}
              value={IndFilterBy}
              placeholder="Search term"
              onChange={(e) => setIndFilterBy(e.target.value!)}
            />
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
                (IndFilterColumn == 'region'
                  ? String(RegionMapper(item[IndFilterColumn]))
                      .toLocaleLowerCase()
                      .indexOf(IndFilterBy.toLowerCase()) !== -1
                  : String(item[IndFilterColumn])
                      .toLocaleLowerCase()
                      .indexOf(IndFilterBy.toLowerCase()) !== -1) ? (
                <IndLeaderContainer
                  Rank={item['pos']}
                  Name={item['name']}
                  Region={RegionMapper(item['region'])}
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
            <input
              style={{width: '45%'}}
              value={UnivFilterBy}
              placeholder="Search term"
              onChange={(e) => setUnivFilterBy(e.target.value!)}
            />
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
            <input
              style={{width: '45%'}}
              value={EngagementFilterBy}
              placeholder="Search term"
              onChange={(e) => setEngagementFilterBy(e.target.value!)}
            />
          </div>
          <IonGrid>
            <IonRow className="leaderboard_header">
              <IonCol size="1">#</IonCol>
              <IonCol size="3">Name</IonCol>
              <IonCol size="2.5">Region</IonCol>
              <IonCol size="3.5">University</IonCol>
              <IonCol size="2">Score</IonCol>
            </IonRow>
            {EngagementItems.map((item) => {
              return EngagementFilterBy == undefined ||
                EngagementFilterBy == '' ||
                (EngagementFilterColumn == 'region'
                  ? String(RegionMapper(item[EngagementFilterColumn]))
                      .toLocaleLowerCase()
                      .indexOf(EngagementFilterBy.toLowerCase()) !== -1
                  : String(item[EngagementFilterColumn])
                      .toLocaleLowerCase()
                      .indexOf(EngagementFilterBy.toLowerCase()) !== -1) ? (
                <EngagementLeaderContainer
                  Rank={item['pos']}
                  Name={item['name']}
                  Region={RegionMapper(item['region'])}
                  University={item['teamName']}
                  Score={Number(item['total']).toFixed(2)}
                />
              ) : null;
            })}
          </IonGrid>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div
            onClick={() => {
              setLowerLim(lowerLim + numberOfRows);
              getMoreData(lowerLim);
            }}
          >
            Load More...
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IndLeaderboard;
