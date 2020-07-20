import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import './FaqTab.css';
import FaqsContainer from '../components/FaqsContainer';

const FaqTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Frequently Asked Questions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">FAQs!</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <FaqsContainer />
            </IonContent>
        </IonPage>
    );
};

export default FaqTab;
