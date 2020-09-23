import React from 'react';
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

interface IndContainerProps {
  Rank: number;
  Name: string;
  Region: string;
  University: string;
  Score: string;
}

interface UnivContainerProps {
  Rank: number;
  University: string;
  Score: string;
}

interface EngagementContainerProps {
  Rank: number;
  Name: string;
  Region: string;
  University: string;
  Score: string;
}
export const IndLeaderContainer: React.FC<IndContainerProps> = ({
  Rank,
  Name,
  Score,
  Region,
  University,
}) => {
  return (
    <IonRow className="leaderboard_header">
      <IonCol size="1">{Rank}</IonCol>
      <IonCol size="3">{Name}</IonCol>
      <IonCol size="2.5">{Region}</IonCol>
      <IonCol size="3">{University}</IonCol>
      <IonCol size="2.5">{Score}</IonCol>
    </IonRow>
  );
};

export const UnivLeaderContainer: React.FC<UnivContainerProps> = ({
  Rank,
  University,
  Score,
}) => {
  return (
    <IonRow className="leaderboard_header">
      <IonCol size="2">{Rank}</IonCol>
      <IonCol size="5">{University}</IonCol>
      <IonCol size="5">{Score}</IonCol>
    </IonRow>
  );
};

export const EngagementLeaderContainer: React.FC<EngagementContainerProps> = ({
  Rank,
  Name,
  Score,
  Region,
  University,
}) => {
  return (
    <IonRow className="leaderboard_header">
      <IonCol size="1">{Rank}</IonCol>
      <IonCol size="3">{Name}</IonCol>
      <IonCol size="2.5">{Region}</IonCol>
      <IonCol size="3.5">{University}</IonCol>
      <IonCol size="2">{Score}</IonCol>
    </IonRow>
  );
};
