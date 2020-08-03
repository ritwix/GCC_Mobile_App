import React from 'react';
import axios from 'axios';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './IndividualLeaderboard.css';
import {IndLeaderContainer} from '../components/LeaderboardContainer';

const GetIndLeader = (from: number) => {
    return axios({
        url: 'http://gcc-global-dev.herokuapp.com/leaderboard',
        method: 'get',
        data: 'from=' + from + '&limit=20',
    }).then(response => {
    console.log(response);
        return response.data;
    })
};

const IndLeaderboard: React.FC = () => {
    const [IndItems, setIndItems] = React.useState([]);
    React.useEffect(() => {
        GetIndLeader(0).then(data => setIndItems(data.contestants));
    }, []);
  
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Individual Leaderboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
            <IonRow className='ind_leaderboard_header'>
                <IonCol>Rank</IonCol>
                <IonCol>Name</IonCol>
                <IonCol>Score</IonCol>
                <IonCol>University</IonCol>
            </IonRow>
            {
                IndItems.map(item => {
                    return (
                        <IndLeaderContainer Rank={item['pos']} Name={item['id']} Score={item['total']}/>
                      );
                    })        
            }
        </IonGrid>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Individual Leaderboard</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default IndLeaderboard;