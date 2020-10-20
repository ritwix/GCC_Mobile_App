import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonText, IonIcon } from '@ionic/react';
import './HowToPlay.css';
import prizes from '../image/icons_large_merit.png';
import questions from '../image/icons_large_question.png';
import globe from '../image/brandnet/icons_large_global.png';
import calendar from '../image/icons_large_calendar.png';
import PageHeader from '../components/PageHeader';
import { chevronDown, chevronForward } from 'ionicons/icons';
import { API_AUTHENTICATION, GCC_BASE_URL } from '../constants';


const fetchHowToPlay = () => {
  return axios
    .get<any>(`${GCC_BASE_URL}/challenge/mobile/getHowToPlay`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json',
      },
      auth: API_AUTHENTICATION,
    })
    .then((response) => {
      console.log(response.data[0]);
      return response.data[0];
    })
    .catch(() => {
      alert('Data could not be fetched. Please check your internet connection.');
    });
};


const Buttn: React.FC<{ val: String; visible: boolean; txt: String }> = (
  props
) => {
  const [visib, setVisib] = useState(props.visible);

  return (
    <div style={{ marginTop: 10 }}>
      <IonIcon icon={chevronDown} hidden={!visib} />
      <IonIcon icon={chevronForward} hidden={visib} />
      <button
        onClick={() => {
          setVisib((visib) => !visib);
        }}
        className="buttn"
      >
        {props.val}
      </button>
      <div hidden={!visib}>{props.txt}</div>
    </div>
  );
};

const HowToPlay: React.FC = () => {
  const [htpData, setHtpData]  = useState(Object);
  useEffect(() => {
    fetchHowToPlay().then((htpdata) => { setHtpData(htpdata);});
  }, []);

  
  return (
    <IonPage>
      <PageHeader title="How to play" />
      <IonContent>
        <div className="how-to-play-container">
          <h4>
            Follow six simple steps to successfully complete the Coding
            Challenge:
          </h4>
          <IonText>
            <h3> {htpData.howToPlay ? htpData.howToPlay[0].number + ". " + htpData.howToPlay[0].title : null } </h3>
            <div>
            {htpData.howToPlay ? htpData.howToPlay[0].caption : null }
            </div>
            <Buttn
              val={htpData.howToPlay ? htpData.howToPlay[0].question : null }
              visible={false}
              txt = {htpData.howToPlay ? htpData.howToPlay[0].answer : null }
            />
          </IonText>
          <IonText>
            <h3>{htpData.howToPlay ? htpData.howToPlay[1].number + ". " + htpData.howToPlay[1].title : null }</h3>
            <div>
            {htpData.howToPlay ? htpData.howToPlay[1].caption : null }
            </div>
            <Buttn
              val={htpData.howToPlay ? htpData.howToPlay[1].question : null }
              visible={false}
              txt = {htpData.howToPlay ? htpData.howToPlay[1].answer : null }
            />
          </IonText>
          <IonText>
            <h3>{htpData.howToPlay ? htpData.howToPlay[2].number + ". " + htpData.howToPlay[2].title : null }</h3>
            <div>
            {htpData.howToPlay ? htpData.howToPlay[2].caption : null }
            </div>
            <Buttn
              val={htpData.howToPlay ? htpData.howToPlay[2].question : null }
              visible={false}
              txt = {htpData.howToPlay ? htpData.howToPlay[2].answer : null }
            />
          </IonText>
          <IonText>
            <h3>{htpData.howToPlay ? htpData.howToPlay[3].number + ". " + htpData.howToPlay[3].title : null }</h3>
            <div>
            {htpData.howToPlay ? htpData.howToPlay[3].caption : null }
            </div>
            <Buttn
              val={htpData.howToPlay ? htpData.howToPlay[3].question : null }
              visible={false}
              txt = {htpData.howToPlay ? htpData.howToPlay[3].answer : null }
            />
          </IonText>
          <IonText>
            <h3>{htpData.howToPlay ? htpData.howToPlay[4].number + ". " + htpData.howToPlay[4].title : null }</h3>
            <div>
            {htpData.howToPlay ? htpData.howToPlay[4].caption : null }
            </div>
            <Buttn
              val={htpData.howToPlay ? htpData.howToPlay[4].question : null }
              visible={false}
              txt = {htpData.howToPlay ? htpData.howToPlay[4].answer : null }
            />
          </IonText>
          <IonText>
            <h3>{htpData.howToPlay ? htpData.howToPlay[5].number + ". " + htpData.howToPlay[5].title : null }</h3>
            <div>
            {htpData.howToPlay ? htpData.howToPlay[5].caption : null }
            </div>
            <Buttn
              val={htpData.howToPlay ? htpData.howToPlay[5].question : null }
              visible={false}
              txt = {htpData.howToPlay ? htpData.howToPlay[5].answer : null }
            />
          </IonText>
          <IonText>
            <h2>Prizes</h2>
          </IonText>

          <IonText>
            <h3>Global prizes</h3>
            <div> Global Challenge winner: </div>
            <br></br>
            <div className="Prizes">  {htpData.prizes ? htpData.prizes.global : null  }</div>

            <h3>Regional prizes</h3>
            <div>
              The top three coders from each region will win the following
              prizes:
            </div>
            <br></br>
            <div className="Prizes">1. {htpData.prizes ? htpData.prizes.regionalFirst : null  }</div>
            <div className="Prizes">2. {htpData.prizes ? htpData.prizes.regionalSecond : null  }</div>
            <div className="Prizes">3. {htpData.prizes ? htpData.prizes.regionalThird : null  }</div>

            <h3> Engagement badges</h3>
            <div>
              {' '}
              The coder with the most engagement badges will be awarded:
            </div>
            <br></br>
            <div className="Prizes">
            {htpData.prizes ? htpData.prizes.engagement : null  }
            </div>
          </IonText>

          <IonText
            style={{ display: 'block', fontWeight: '600', fontSize: '230%' }}
          >
            <h2>About Global Coding Challenge</h2>
          </IonText>
          <IonText>
            <p style={{ fontSize: '16px' }}>
            
            {htpData.about ? htpData.about : null}
            </p>
            
          </IonText>

          <div className="GreyBar">
            <div>
              <div className="icon-group">
                <img src={calendar} style={{ height: '50px' }} />
                <h3>
                  {htpData.greyBar ? htpData.greyBar[0].title : null} 
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
              {htpData.greyBar ? htpData.greyBar[0].caption : null}
              </p>
            </div>
            <div>
              <div className="icon-group">
                <img src={globe} style={{ height: '50px' }} />
                <h3>
                  {htpData.greyBar ? htpData.greyBar[1].title : null} 
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
              {htpData.greyBar ? htpData.greyBar[1].caption : null}
              </p>
            </div>
            <div>
              <div className="icon-group">
                <img src={questions} style={{ height: '50px' }} />
                <h3>
                  {htpData.greyBar ? htpData.greyBar[2].title : null} 
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
              {htpData.greyBar ? htpData.greyBar[2].caption : null}
              </p>
            </div>
            <div>
              <div className="icon-group">
                <img src={prizes} style={{ height: '50px' }} />
                <h3>
                  {htpData.greyBar ? htpData.greyBar[3].title : null} 
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
              {htpData.greyBar ? htpData.greyBar[3].caption : null}
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HowToPlay;
