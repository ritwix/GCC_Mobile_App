import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';

interface IndContainerProps {
    Rank: string;
    Name: string;
    Score: string;
}

interface TeamContainerProps {
    Rank: string;
    Team: string;
    Score: string;
}

export const IndLeaderContainer: React.FC<IndContainerProps> = ({ Rank, Name, Score }) => {
    return (
        <IonRow className='ind_leaderboard_header'>
            <IonCol>{Rank}</IonCol>
            <IonCol>{Name}</IonCol>
            <IonCol>{Score}</IonCol>
        </IonRow>
    );
};

export const TeamLeaderContainer: React.FC<TeamContainerProps> = ({ Rank, Score, Team }) => {
    return (
        <IonRow className='uni_leaderboard_header'>
            <IonCol>{Rank}</IonCol>
            <IonCol>{Team}</IonCol>
            <IonCol>{Score}</IonCol>
        </IonRow>
    );
};

