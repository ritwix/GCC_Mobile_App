import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
  IonText,
} from '@ionic/react';
import './HowToPlay.css';
import prizes from '../image/icons_large_merit.png';
import questions from '../image/icons_large_question.png';
import globe from '../image/brandnet/icons_large_global.png';
import calendar from '../image/icons_large_calendar.png';
import global from '../image/prizes/globe.png';

const HowToPlay: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>How to play</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">How to play</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <p>
                Follow five simple steps to successfully complete the Coding
                Challenge:
              </p>
              <IonText>
                <div className="BulletPoints">
                  1. Register with your Github login
                </div>
                <div className="Points">
                  Sign up for the Coding Challenge, making sure to provide your
                  Github username to be able to submit code. You can participate as an individual and compete 
                  with others in your region as well as participants all over the globe.
                </div>
              </IonText>
              <br></br>
              <IonText>
                <div className="BulletPoints">
                  2. Solve questions in your own time
                </div>
                <div className="Points">
                  Work on solutions to the questions using any of Java, Python,
                  C# or JavaScript. You can submit questios multiple times, so feel 
                  free to experiment, and do your best to achieve the highest score possible!
                </div>
              </IonText>
              <br></br>
              <IonText>
                <div className="BulletPoints">3. Submit you code</div>
                <div className="Points">
                  Push your code back to the Github repository, so that our
                  automated testing system can evaluate how you've done.
                </div>
              </IonText>
              <br></br>
              <IonText>
                <div className="BulletPoints">4. Check your score</div>
                <div className="Points">
                  Your code is judged against everybody else's, and then your
                  points received is determined. You can also be granted points 
                  through achievement badges earned through specific challenges and tasks achieved during the competition.
                </div>
              </IonText>
              <br></br>
              <IonText>
                <div className="BulletPoints">5. Win prizes</div>
                <div className="Points">
                  At the end of the competition, the top performing students
                  will receive various prizes! There are also prizes for the person
                  who collects the most special engagement badges. These particular
                  badges don't add to your score, but they're still worth collecting!
                </div>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        <br />
        <br />

        <IonText
          style={{ display: 'block', fontWeight: '600', fontSize: '230%' }}
        >
          Prizes
        </IonText>

        <IonText >
            <h2 style={{paddingLeft:20 , backgroundColor: '#f1f2f2'}}> Global Prizes</h2>
            <div style={{paddingLeft:20}}> Global Challenge Winner: </div>
            <br></br>
            <div className='Prizes'>1. Macbook Pro </div>

            <h2 style={{paddingLeft:20, backgroundColor: '#f1f2f2'}}>Regional Prizes</h2>
            <div style={{paddingLeft:20}}>The top three coders from each region will win the following prizes:</div>
            <br></br>
                <div  className='Prizes' >1. New iPhone</div>
                <div className='Prizes'>2. Smart Watch</div>
                <div className='Prizes'>3. Portable Bluetooth Speaker</div>
            
            <h2 style={{paddingLeft:20 , backgroundColor: '#f1f2f2'}}> Engagement Badges</h2>
            <div style={{paddingLeft:20}}> The coder with the most engagement badges will be awarded:</div>
            <br></br>
            <div className='Prizes'>Apple iPad Pro and Bose Noise Cancelling Headphones</div>

        </IonText>

        <br />
        <br />
        <br />
        <IonText
          style={{ display: 'block', fontWeight: '600', fontSize: '230%' }}
        >
          <div>About the Coding Challenge</div>
        </IonText>
        <IonText>
          <p style={{paddingLeft:20}}>
            The Global Coding Challenge is an online coding competition between
            TAs across the globe. Over 1 week, between August 31st and September 7th,
            TAs will be able to attempt solutions to nine coding problems. Solutions 
            would be evaluated on cyclomatic complexity, and scored proportionally 
            against solutions provided by other students. Participants can improve their 
            code as many times as they like during the competition. They can also earn 
            points towards their total score by earning achievement badges, which are 
            rewarded for achieving a variety of accomplishments throught the competition.
            All possible badges and their conditions are visible on the participants 
            profile page. At 10am GMT, September 7th 2020, the Leaderboards will lock and 
            the Global Coding Champion will be announced. 
          
          </p>

          <p style={{paddingLeft:20}}>

            The competition has been entirely designed, built and run by our
            technology graduates and interns.
          </p>
        </IonText>

        <br />
        <br />
        <div className="GreyBar">
          <div>
            <IonImg src={calendar} style={{ height: '50px' }} />
            <div className="header"> 1 Week </div>
            <div>
              The challenge will run for 1 week, from August 31st to September 7th.
            </div>
          </div>
          <div>
            <IonImg src={globe} style={{ height: '50px' }} />
            <div className="header">6 Regions</div>
            <div>
              Competition is run across Asia-Pacific region, India, Poland,
              Switzerland, UK & Ireland, and US.
            </div>
          </div>
          <div>
            <IonImg src={questions} style={{ height: '50px' }} />
            <div className="header">9 Questions</div>
            <div>
              Nine original questions for you to answer using any of four popular
              programming languages.
            </div>
          </div>
          <div>
            <IonImg src={prizes} style={{ height: '50px' }} />
            <div className="header">20 Prizes</div>
            <div>
              There are prizes for the best individual coder globally,
              the top 3 coders of all 6 regions, and the coder with the most engagement badges.
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HowToPlay;
