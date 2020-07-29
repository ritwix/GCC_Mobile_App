import React, { useState } from 'react';
import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonRouterOutlet,
  IonTextarea,
  IonToggle,
  IonTab,
  IonText,
  IonItemSliding,
  IonImg,
} from '@ionic/react';
import './Questions.css';
import axios from 'axios';
import logo from '../CSBlue.png';
import ReactMarkdown from 'react-markdown';

const sendGetRequest = () => {
  return axios({
    //url: "https://cscc-gl.herokuapp.com/allquestions", //last year questions
    url: 'https://gcc-global-dev.herokuapp.com/allquestions', //  this year questions
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const DisplayQuestion = (props: { visib: number; q: number }) => {
  const [question, setQuestion] = useState([]);
  if (props.visib == props.q) {
    sendGetRequest().then((data) => setQuestion(data));
    return (
      <>
        <IonList color="primary">
          {question.map((q) => {
            return q['questionNumber'] == props.q ? (
              <ReactMarkdown source={q['questionText']} />
            ) : null;
          })}
        </IonList>
      </>
    );
  } else {
    return <></>;
  }
};

const Questions: React.FC = () => {
  const [visible, setVisible] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Questions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem
            button
            onClick={() => {
              visible !== 1 ? setVisible(1) : setVisible(0);
            }}
          >
            <IonLabel position="fixed">Question 1</IonLabel> <br />
            <DisplayQuestion visib={visible} q={1} />
          </IonItem>
          <IonItem
            button
            onClick={() => {
              visible !== 2 ? setVisible(2) : setVisible(0);
            }}
          >
            <IonLabel position="fixed">Question 2</IonLabel>

            <DisplayQuestion visib={visible} q={2} />
          </IonItem>
          <IonItem
            button
            onClick={() => {
              visible !== 3 ? setVisible(3) : setVisible(0);
            }}
          >
            <IonLabel position="fixed">Question 3</IonLabel>
            <DisplayQuestion visib={visible} q={3} />
          </IonItem>
          <IonItem
            button
            onClick={() => {
              visible !== 4 ? setVisible(4) : setVisible(0);
            }}
          >
            <IonLabel position="fixed">Question 4</IonLabel>
            <DisplayQuestion visib={visible} q={4} />
          </IonItem>
          <IonItem
            button
            onClick={() => {
              visible !== 5 ? setVisible(5) : setVisible(0);
            }}
          >
            <IonLabel position="fixed">Question 5</IonLabel>
            <DisplayQuestion visib={visible} q={5} />
          </IonItem>
          <IonItem
            button
            onClick={() => {
              visible !== 6 ? setVisible(6) : setVisible(0);
            }}
          >
            <IonLabel position="fixed">Question 6</IonLabel>
            <DisplayQuestion visib={visible} q={6} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
