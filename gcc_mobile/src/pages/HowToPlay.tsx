import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonList,
  IonItem,
  IonCol,
  IonRow,
  IonLabel,
  IonListHeader,
  IonCardHeader,
  IonImg,
  IonTextarea,
  IonText,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './HowToPlay.css';
import logo from '../CSBlue.png';
import { grid } from 'ionicons/icons';
import prizes from '../image/icons_large_merit.png';
import questions from '../image/icons_large_question.png';
import globe from '../image/brandnet/icons_large_global.png';
import calendar from '../image/icons_large_calendar.png';

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
                  Github username to be able to submit code. You can register
                  either as an individual or as a member of a three-person team.
                </div>
              </IonText>
              <br></br>
              <IonText>
                <div className="BulletPoints">
                  2. Solve questions in your own time
                </div>
                <div className="Points">
                  Work on solutions to the questions using any of Java, Python,
                  C# or JavaScript.
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
                  position on the leaderboard is determined. See how you've done
                  and try to improve!
                </div>
              </IonText>
              <br></br>
              <IonText>
                <div className="BulletPoints">5. Win prizes</div>
                <div className="Points">
                  At the end of the competition, the top performing students
                  will receive various prizes!
                </div>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>

        <br />
        <br />

        <IonGrid className="GreyBar">
          <IonRow>
            <IonCol size="3">
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonImg
                      src={calendar}
                      style={{ height: '50px', float: 'right' }}
                    />
                  </IonCol>
                  <IonCol size="4" style={{ paddingLeft: '0' }}>
                    <IonText className="GreyBarColumn">
                      {' '}
                      1 <br /> Week
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="3">
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonImg
                      src={globe}
                      style={{ height: '50px', float: 'right' }}
                    />
                  </IonCol>
                  <IonCol size="4" style={{ paddingLeft: '0' }}>
                    <IonText className="GreyBarColumn">
                      {' '}
                      6 <br /> Regions
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="3">
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonImg
                      src={questions}
                      style={{ height: '50px', float: 'right' }}
                    />
                  </IonCol>
                  <IonCol size="4" style={{ paddingLeft: '0' }}>
                    <IonText className="GreyBarColumn">
                      {' '}
                      6 <br /> Questions
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="3">
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonImg
                      src={prizes}
                      style={{ height: '50px', float: 'right' }}
                    />
                  </IonCol>
                  <IonCol size="4" style={{ paddingLeft: '0' }}>
                    <IonText className="GreyBarColumn">
                      {' '}
                      3 <br /> Prizes
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              The challenge will run for 1 week, from December 11th to December
              18th.
            </IonCol>
            <IonCol size="3">
              Competition is run across Hong Kong & Singapore, India, Poland,
              Switzerland, UK & Ireland, and US.
            </IonCol>
            <IonCol size="3">
              Six original questions for you to answer using any of four popular
              programming languages.
            </IonCol>
            <IonCol size="3">
              There are prizes for the best individual, best team (of up to
              three), as well as the best overall region.
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
        <IonText>TBA</IonText>

        <br />
        <br />
        <br />
        <IonText
          style={{ display: 'block', fontWeight: '600', fontSize: '230%' }}
        >
          <div>About the Coding Challenge</div>
        </IonText>
        <IonText>
          <p>
            The Global Coding Challenge is an online coding competition between
            TAs across the globe. Over 1 week, between 11th Dec and 18th Dec,
            TAs will be able to attempt solutions to siz coding problems. TAs
            can enter either individually or as a team of up to three. Solutions
            will be evaluated on execution time and scored proportionally
            against solutions provided by other students. Student can improve
            their code as many times as they like during the competition. At
            10am GMT, 18th December 2019, the Leaderboards will lock and the
            Global Coding Champion will be announced.
          </p>

          <p>
            The competition has been entirely designed, built and run by our
            technology graduates and interns.
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default HowToPlay;
