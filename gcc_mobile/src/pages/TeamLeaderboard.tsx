import React, { useEffect } from 'react';
import axios from 'axios';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import './IndividualLeaderboard.css';
import { TeamLeaderContainer } from '../components/LeaderboardContainer';

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

const TeamLeaderboard: React.FC = () => {
  const [TeamItems, setTeamItems] = React.useState([]);
  useEffect(() => {
    GetTeamLeader(0).then((data) => setTeamItems(data.contestants));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>University Leaderboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Team Leaderboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow className="ind_leaderboard_header">
            <IonCol>Rank</IonCol>
            <IonCol>University</IonCol>
            <IonCol>Score</IonCol>
          </IonRow>
          <TeamLeaderContainer Rank="1" Score="100" Team="HKUST" />
          <TeamLeaderContainer Rank="2" Score="99" Team="MIT" />
          <TeamLeaderContainer Rank="2**32" Score="-2**32+1" Team="HKU" />
          {/* {TeamItems.map((item) => {
            return (
              <TeamLeaderContainer
                key={item['id']}
                Rank={item['pos']}
                Team={item['id']}
                Score={item['total']}
              />
            );
          })} */}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TeamLeaderboard;
