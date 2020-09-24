import React from 'react';
import axios from 'axios';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from '@ionic/react';
import './IndividualLeaderboard.css';
import {
  IndLeaderContainer,
  UnivLeaderContainer,
  EngagementLeaderContainer,
} from '../components/LeaderboardContainer';
import PageHeader from '../components/PageHeader';

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

const regionOptions = [
  { value: 'GLOBAL', text: 'Global' },
  { value: 'AMC', text: 'USA & Canada' },
  { value: 'INDIA', text: 'India' },
  { value: 'EUROPE', text: 'Europe' },
  { value: 'SEA', text: 'South East Asia' },
  { value: 'SWIS', text: 'Switzerland' },
  { value: 'UK', text: 'UK & Ireland' },
  { value: 'ROW', text: 'Rest of the World' },
];

const indFilterColumnOptions = [
  { value: 'pos', text: 'Rank' },
  { value: 'name', text: 'Name' },
  { value: 'region', text: 'Region' },
  { value: 'teamName', text: 'University' },
];

const univFilterColumnOptions = [
  { value: 'pos', text: 'Rank' },
  { value: 'teamName', text: 'University' },
];

const engagementFilterColumnOptions = [
  { value: 'pos', text: 'Rank' },
  { value: 'name', text: 'Name' },
  { value: 'region', text: 'Region' },
  { value: 'teamName', text: 'University' },
];

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
          <div>Select Region:</div>
          <select
            className="filter-select"
            value={Region}
            onChange={(e) => setRegion(e.target.value)}
          >
            {regionOptions.map(({ text, value }) => (
              <option value={value} key={value}>
                {text}
              </option>
            ))}
          </select>
        </div>

        <div hidden={!(leaderboardType === 'Individual')}>
          <div className="filter-column">
            <IonLabel>Filter By:</IonLabel>
            <select
              className="filter-select"
              value={IndFilterColumn}
              onChange={(e) => setIndFilterColumn(e.target.value)}
            >
              {indFilterColumnOptions.map(({ text, value }) => (
                <option value={value} key={value}>
                  {text}
                </option>
              ))}
            </select>
            <input
              className="minimal"
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
                  key={JSON.stringify(item)}
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
            <select
              className="filter-select"
              value={UnivFilterColumn}
              onChange={(e) => setUnivFilterColumn(e.target.value)}
            >
              {univFilterColumnOptions.map(({ text, value }) => (
                <option value={value} key={value}>
                  {text}
                </option>
              ))}
            </select>
            <input
              className="minimal"
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
                  key={JSON.stringify(item)}
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
            <select
              className="filter-select"
              value={EngagementFilterColumn}
              onChange={(e) => setEngagementFilterColumn(e.target.value)}
            >
              {engagementFilterColumnOptions.map(({ text, value }) => (
                <option value={value} key={value}>
                  {text}
                </option>
              ))}
            </select>
            <input
              className="minimal"
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
                  key={JSON.stringify(item)}
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
