import React, { useState, useEffect } from 'react';


import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonInfiniteScroll, IonLabel, IonModal, IonPage } from '@ionic/react';

import './Questions.css';
import axios from 'axios';
import { lockClosedSharp , lockOpenOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import PageHeader from '../components/PageHeader';
import stockImage1 from '../image/questions/stock-list.jpg';
import volatilityImage from '../image/questions/stock-volatility.jpg';
import serverImage from '../image/questions/server.jpg';
import riskImage from '../image/questions/risk-benefit.jpg';
import meetingImage from '../image/questions/meeting.jpg';
import plan from '../image/questions/plan.jpg';
import secretCode from '../image/questions/codepad.jpg';
import dollars from '../image/questions/dollars.jpg';
import stockImage from '../image/questions/stock-list-2.jpg';
import { codingChallengeStarted } from '../CompetitionTimer';
import { Parser, HtmlRenderer } from 'commonmark';
import { useUserContext } from '../context/user';
import { GCC_BASE_URL } from '../constants';

type Question = {
  active: boolean;
  id: string;
  questionNumber: number;
  questionText: string;
};

const questionDetails = [
  {
      caption:"Make as much money as possible with only a single purchase",
      img: stockImage1,
      subtitle: "Profit Maximization Basic"
  },
  {
      caption:"Make as much money as possible with as few trades as possible",
      img: volatilityImage,
      subtitle: "Profit Maximization Advanced"
  },
  {
      caption:"Help John make the profit he wants as quickly as possible",
      img: serverImage,
      subtitle: "Achieving Desired Profit Quickly"
  },
  {
      caption:"Plan a series of trades to make max profit while considering the risk",
      img: riskImage,
      subtitle: "Calculating Risk Vs Profit"
  },
  {
      caption:"Match the bankers and participants in the fewest sessions possible",
      img: meetingImage,
      subtitle: "Matching Bankers and Participants"
  },
  {
      caption:"Encrypt English text to protect data from theft",
      img: plan,
      subtitle: "Encrypting Secret Messages"
  },
  {
      caption:"Automatically flag suspicious users on a Q&A board to be checked for cheating",
      img: secretCode,
      subtitle: "Checking Q&A for Cheaters"
  },
  {
      caption:"Find the number of ways you can make change on a purchase with a variety of coins",
      img: dollars,
      subtitle: "Making Change Using Coins"
  },
  {
      caption:"Sort transactions by fraud probability to detect credit card fraud",
      img: stockImage,
      subtitle: "Sorting Fraudulent Transactions"
  },
  {
    caption:"Sort transactions by fraud probability to detect credit card fraud",
    img: stockImage,
    subtitle: "Sorting Fraudulent Transactions"
  },
  {
    caption:"Sort transactions by fraud probability to detect credit card fraud",
    img: stockImage,
    subtitle: "Sorting Fraudulent Transactions"
  },
]

const fetchQuestions = () => {
  return axios
    .get<any>(`${GCC_BASE_URL}/allquestions`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      },
      auth: {
        username: 'gcc2020webapp',
        password: 'gcc-2020-webapp-789',
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

const fetchContestantProfile = (user:any) => {
  return axios({
    //url: "https://cscc-gl.herokuapp.com/allquestions", //last year questions
    url: 'https://gcc-global-dev.herokuapp.com/contestant/git/sahmad14'+  user?.githubUsername,  //  this year questions
    method: 'get',
  }).then((response) => {
    console.log(response.data.level);
    return response.data.level;
  });
};

var questionCardVisib : boolean;
questionCardVisib = false;
const Question: React.FC<{ question: Question, levelRank: number}> = (props) => {
  const { question } = props;
  
  const { levelRank } = props;
  const [visible, setVisible] = useState(false);
  
  const reader = new Parser();
  const writer = new HtmlRenderer();
  const parsed = reader.parse(question.questionText);

  return (
    <div
      className="question-item"
      onClick={() => {
        setVisible((visible) => !visible);
        questionCardVisib = !questionCardVisib;
      }}
    >
        <IonCard style={{borderRadius: 0, boxShadow: 'none', border: '#a8a8a7 1px solid'}}> 
        <img src={questionDetails[question.questionNumber -1].img} />
        <IonCardHeader>
          <IonCardSubtitle style={{textTransform: 'capitalize'}}> {questionDetails[question.questionNumber -1].subtitle}</IonCardSubtitle>
          <IonCardTitle style={{fontSize: 20}}> Question {question.questionNumber} {question.questionNumber <= 3 ? "(Easy)": question.questionNumber <=6 ? "(Medium)":"(Hard)"}
            <div style={{float:'right'}} hidden={(question.questionNumber <= 3*levelRank ? false:true) ||  !codingChallengeStarted()}>  Active <IonIcon icon={lockOpenOutline} /> </div>
            <div style={{float:'right'}} hidden={!(question.questionNumber <= 3*levelRank ? false:true) && codingChallengeStarted()}> Locked <IonIcon icon={lockClosedSharp}/> </div>
          </IonCardTitle>
          </IonCardHeader>
        <IonCardContent>
          {questionDetails[question.questionNumber -1].caption}
          </IonCardContent>
        </IonCard>
        <IonModal isOpen={visible && (question.questionNumber <= 3*levelRank ? true:false) && codingChallengeStarted()} >
         <IonContent>
            <h1 className="content">Question {question.questionNumber}</h1>
            <IonImg src={questionDetails[question.questionNumber -1].img}></IonImg>
            <div
              className="codingViewMarkDown"
              id="markdown"
              dangerouslySetInnerHTML={{ __html: writer.render(parsed)}}
            />
            <h4 style={{padding:'2%'}}>
              <a  style={{color:'black' }} href="https://gcc-global-dev-webapp.herokuapp.com/#/">Click here</a> to visit Global Coding Challenge website on desktop device to answer the question</h4>
          </IonContent> 
        </IonModal>
      
    </div>
  );
};

const Questions: React.FC = () => {
  console.log(codingChallengeStarted())
  const [questions, setQuestions] = useState<Question[]>([]);
  const [levelRank, setLevelRank]  = useState(0);
  const { user, setUser } = useUserContext();
  useEffect(() => {
    fetchQuestions().then((questions) => setQuestions(questions));
  }, []);

  useEffect(() => {
    fetchContestantProfile(user).then((level) => level=="easy" ? setLevelRank(1): level =="medium" ? setLevelRank(2):setLevelRank(3));   
  }, [user]);

  return (
    <IonPage >
      <PageHeader title="Questions"/>
      <IonContent>
          {questions.map((question) => (
            <Question key={question.id} question={question} levelRank={levelRank}/>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default Questions;
