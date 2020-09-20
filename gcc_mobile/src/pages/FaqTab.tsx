import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./FaqTab.css";
import FaqsContainer from "../components/FaqsContainer";
import PageHeader from "../components/PageHeader";
import SupportQueryContainer from "../components/SupportQueryContainer";

const FaqTab: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="FAQs" />
      <IonContent>
        {/* <IonGrid>
          <IonRow>
            <IonCol> */}
        <FaqsContainer />
        <SupportQueryContainer />
        {/* </IonCol>
          </IonRow>
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default FaqTab;
