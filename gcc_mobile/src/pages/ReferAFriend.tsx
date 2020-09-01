import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ReferAFriend.css';
import PageHeader from '../components/PageHeader';

const ReferAFriend: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Refer a friend" />
      <IonContent>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default ReferAFriend;
