import './NewsTab.css';
import { IonPage, IonContent } from '@ionic/react';
import React from 'react';
import NewsContainer from '../components/NewsContainer';
import PageHeader from '../components/PageHeader';

const NewsTab: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="News" />
      <IonContent>
        <NewsContainer />
      </IonContent>
    </IonPage>
  );
};

export default NewsTab;
