import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import './FaqTab.css';
import FaqsContainer from '../components/FaqsContainer';
import PageHeader from '../components/PageHeader';
import SupportQueryContainer from '../components/SupportQueryContainer';

const FaqTab: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="FAQs" />
      <IonContent>
        <FaqsContainer />
        <SupportQueryContainer />
      </IonContent>
    </IonPage>
  );
};

export default FaqTab;
