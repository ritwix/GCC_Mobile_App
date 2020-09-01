import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage } from '@ionic/react';
import './TeamLeaderboard.css';
import Table from '../components/Table';
import PageHeader from '../components/PageHeader';

const GetTeamLeader = (from: number) => {
  return axios({
    url: 'http://gcc-global-dev.herokuapp.com/teamleaderboard',
    method: 'get',
    data: 'from=' + from + '&limit=20',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

enum Leaderboard {
  individual,
  city,
}

const mockData = {
  [Leaderboard.individual]: {
    headers: ['Rank', 'Name', 'Score'],
    data: [
      {
        Rank: '1',
        Name: 'Team A',
        Score: '100',
      },
      {
        Rank: '2',
        Name: 'Team B',
        Score: '90',
      },
      {
        Rank: '3',
        Name: 'Team C',
        Score: '50',
      },
      {
        Rank: '4',
        Name: 'Team D',
        Score: '40',
      },
      {
        Rank: '5',
        Name: 'Team E',
        Score: '35',
      },
      {
        Rank: '6',
        Name: 'Team F',
        Score: '20',
      },
    ],
  },
  [Leaderboard.city]: {
    headers: ['Rank', 'City', 'Score'],
    data: [
      {
        Rank: '1',
        City: 'Hong Kong',
        Score: '100',
      },
      {
        Rank: '2',
        City: 'Pune',
        Score: '90',
      },
      {
        Rank: '3',
        City: 'London',
        Score: '50',
      },
      {
        Rank: '4',
        City: 'New York',
        Score: '40',
      },
      {
        Rank: '5',
        City: 'Wakanda',
        Score: '35',
      },
    ],
  },
};

const selectedBtnStyle = {
  backgroundColor: 'black',
  color: 'white',
};

const TeamLeaderboard: React.FC = () => {
  // disable for now due to no cross origin policy error
  // const [TeamItems, setTeamItems] = React.useState([]);
  // useEffect(() => {
  //   GetTeamLeader(0).then((data) => setTeamItems(data.contestants));
  // }, []);

  const [leaderboard, setLeaderboard] = useState<Leaderboard>(
    Leaderboard.individual
  );

  const headers = mockData[leaderboard].headers;
  const data = mockData[leaderboard].data;

  return (
    <IonPage>
      <PageHeader title="Leaderboard" />
      <IonContent className="content">
        <div className="content">
          <button
            className="cs-button"
            style={
              leaderboard === Leaderboard.individual ? selectedBtnStyle : {}
            }
            onClick={() => setLeaderboard(Leaderboard.individual)}
          >
            Individual
          </button>
          <button
            className="cs-button"
            style={leaderboard === Leaderboard.city ? selectedBtnStyle : {}}
            onClick={() => setLeaderboard(Leaderboard.city)}
          >
            City
          </button>
          <Table headers={headers} data={data} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TeamLeaderboard;
