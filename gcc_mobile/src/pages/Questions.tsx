import React, { useState, useEffect } from 'react';

import { IonContent, IonLabel, IonPage } from '@ionic/react';

import './Questions.css';
import axios from 'axios';
import { arrowDown, arrowForward ,lockClosedSharp , lockOpenOutline} from 'ionicons/icons';
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
    url: 'https://gcc-global.herokuapp.com/allquestions', //  this year questions
    method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const fetchContestantProfile = () => {
  return axios({
    //url: "https://cscc-gl.herokuapp.com/allquestions", //last year questions
    url: 'https://gcc-global.herokuapp.com/contestant/git/sahmad14', //  this year questions
    method: 'get',
  }).then((response) => {
    console.log(response.data.level);
    return response.data.level;
  });
};

const Question: React.FC<{ question: Question, levelRank: number}> = (props) => {
  const { question } = props;
  const { levelRank } = props;
  const [visible, setVisible] = useState(false);
  
  return (
    <li
      className="question-item"
      onClick={() => {
        setVisible((visible) => !visible);
      }}
    >
      <div className="question-number">
    <h4>Question {question.questionNumber}  {question.questionNumber <= 3 ? "(Easy)": question.questionNumber <=6 ? "(Med)":"(Hard)"}</h4>
        
        <div hidden={(question.questionNumber <= 3*levelRank ? false:true)}>  Active <IonIcon icon={lockOpenOutline} /> </div>
        <div hidden={!(question.questionNumber <= 3*levelRank ? false:true)}> Locked <IonIcon icon={lockClosedSharp}/> </div>
          
        <IonIcon icon={arrowDown} hidden={!visible} />
        <IonIcon icon={arrowForward} hidden={visible}  />
      </div>

      {(visible && question.questionNumber<=3*levelRank) && <ReactMarkdown source={question.questionText} /> }
    </li>
  );
};

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [levelRank, setLevelRank]  = useState(1);

  useEffect(() => {
    fetchQuestions().then((questions) => setQuestions(questions));
  }, []);

  useEffect(() => {
    fetchContestantProfile().then((level) => level=="easy" ? setLevelRank(1): level =="medium" ? setLevelRank(2):setLevelRank(3));   
  }, []);


  return (
    <IonPage>
      <PageHeader title="Questions" />

      <IonContent>
        <ul>
          {questions.map((question) => (
            <Question key={question.id} question={question} levelRank={levelRank}/>
          ))}
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
