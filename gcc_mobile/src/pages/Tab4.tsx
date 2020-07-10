import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
      <IonList>
        <IonItem href="">
          <IonLabel >Question 1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Question 2</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Question 3</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Question 4</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Question 5</IonLabel>
        </IonItem>
        
    </IonList>
    
      </IonContent>
    </IonPage>
    
  );
};

export default Tab4;
