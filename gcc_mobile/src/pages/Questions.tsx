import React, { useState, useEffect } from 'react';

import { IonContent, IonPage } from '@ionic/react';

import './Questions.css';
import axios from 'axios';
import { arrowDown, arrowForward } from 'ionicons/icons';
import ReactMarkdown from 'react-markdown';
import { IonIcon } from '@ionic/react';
import PageHeader from '../components/PageHeader';

import CSBlue from '../CSBlue.png';

type Question = {
  active: boolean;
  id: string;
  questionNumber: number;
  questionText: string;
};

const fetchQuestions = () => {
  return axios({
    //url: "https://cscc-gl.herokuapp.com/allquestions", //last year questions
    url: 'https://gcc-global-dev.herokuapp.com/allquestions', //  this year questions
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const Question: React.FC<{ question: Question }> = (props) => {
  const { question } = props;
  const [visible, setVisible] = useState(false);
  return (
    <li
      className="question-item"
      onClick={() => {
        setVisible((visible) => !visible);
      }}
    >
      <div className="question-number">
        <h4>Question {question.questionNumber}</h4>
        <IonIcon icon={arrowDown} hidden={!visible} />
        <IonIcon icon={arrowForward} hidden={visible} />
      </div>

      {visible && <ReactMarkdown source={question.questionText} />}
    </li>
  );
};

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetchQuestions().then((questions) => setQuestions(questions));
  }, []);

  return (
    <IonPage>
      <PageHeader title="Questions" />

      <IonContent>
        <ul>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
