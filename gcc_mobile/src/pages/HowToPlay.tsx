import React, { useState } from 'react';
import { IonContent, IonPage, IonText, IonIcon } from '@ionic/react';
import './HowToPlay.css';
import prizes from '../image/icons_large_merit.png';
import questions from '../image/icons_large_question.png';
import globe from '../image/brandnet/icons_large_global.png';
import calendar from '../image/icons_large_calendar.png';
import PageHeader from '../components/PageHeader';
import { chevronDown, chevronForward } from 'ionicons/icons';

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
  return (
    <IonPage>
      <PageHeader title="How to play" />
      <IonContent>
        <div className="how-to-play-container">
          <h4>
            Follow five simple steps to successfully complete the Coding
            Challenge:
          </h4>
          <IonText>
            <h3>1. Register with GitHub</h3>
            <div>
              Sign up for the Global Coding Challenge using your GitHub username
              in order to be able to submit code.
            </div>
            <Buttn
              val="Where can I sign up?"
              visible={false}
              txt="You can sign up for the Global Coding Challenge by moving to the 'My Profile' section. After logging into your GitHub account and filling out a quick form with basic info, you are good to begin!"
            />
          </IonText>
          <IonText>
            <h3>2. Solve questions</h3>
            <div>
              Work on your solutions using java, python, c#, c++, or javascript.
              You can use any available language for any question.
            </div>
            <Buttn
              val="How often can I submit?"
              visible={false}
              txt="There is no limit for submissions in this coding challenge, so feel free to submit answers as much as you want! Even after they have been judged, you can go back and redo a question to improve your score. There are even one-time badges for submitting working code in each of the available languages, so you are encouraged to experiment and spread your programming wings."
            />
          </IonText>
          <IonText>
            <h3>3. Submit your code</h3>
            <div>
              Push your code back to the Github repository, so that our
              automated testing system can evaluate how you've done.
            </div>
            <Buttn
              val="Where can I submit my code?"
              visible={false}
              txt="The code cannot be submitted via mobile application. However, you can login to Global Goding Challenge through browser to submit the code. In the web version, there are multiple ways to submit your code. Firstly, you can find an in-browser submission box by navigating to the Questions tab, and clicking on a question directly. This page also contains a record of all of your previous submissions, their build status, and their number of tests passed, so you can see how you have progressed. You can also submit code by cloning your personal GCC Git repository locally, and committing your solutions to submit. Afterwards you can view your scores in the repository. However you submit your code, it will be judged for its cyclomatic complexity, and scored appropriately."
            />
          </IonText>
          <IonText>
            <h3>4. Earn points</h3>
            <div>
              Earn points by submitting efficient and quality code, and earn
              bonus point badges to supplement your scores!
            </div>
            <Buttn
              val="What exactly are badges?"
              visible={false}
              txt="Badges are small rewards given to coders who accomplish certain tasks. Bonus point badges reward the player with a small amount of points upon unlocking them. The tasks required to unlock these could be something like submitting questions in different languages, or submitting a successful solution with the fewest lines of code among all competitors. Additionally, there are engagement badges, which are based off of tasks completed that do not correlate with coding skill, such as referring a friend to compete using your personal referral link found in the Referrals section of the web app. These special badges earn no points, but they are fun to collect, and the person with the most engagement badges at the end of the competition earns their own special prize!"
            />
          </IonText>
          <IonText>
            <h3>5. Win prizes</h3>
            <div>
              At the end of the competition, October 28th, the top performing
              coders will receive various prizes!
            </div>
            <Buttn
              val="How many prizes are there?"
              visible={false}
              txt="There are 23 prizes in total. The top coder globally receives the grand prize, but the top 3 coders from each region will also receive prizes. Additionally, the competitor with the most engagement badges will earn a prize. All of the prizes are described in the Prizes section further down this page."
            />
          </IonText>
          <IonText>
            <h2>Prizes</h2>
          </IonText>

          <IonText>
            <h3>Global prizes</h3>
            <div> Global Challenge winner: </div>
            <br></br>
            <div className="Prizes">1. Macbook Pro </div>

            <h3>Regional prizes</h3>
            <div>
              The top three coders from each region will win the following
              prizes:
            </div>
            <br></br>
            <div className="Prizes">1. New iPhone</div>
            <div className="Prizes">2. Smart Watch</div>
            <div className="Prizes">3. Portable Bluetooth Speaker</div>

            <h3> Engagement badges</h3>
            <div>
              {' '}
              The coder with the most engagement badges will be awarded:
            </div>
            <br></br>
            <div className="Prizes">
              Apple iPad Pro and Bose Noise Cancelling Headphones
            </div>
          </IonText>

          <IonText
            style={{ display: 'block', fontWeight: '600', fontSize: '230%' }}
          >
            <h2>About Global Coding Challenge</h2>
          </IonText>
          <IonText>
            <p style={{ fontSize: '16px' }}>
              The Global Coding Challenge is an online coding competition across
              the globe. Over 3 weeks, between October 7th and October 28th,
              participants will be able to attempt solutions to nine coding
              problems. Solutions will be evaluated on cyclomatic complexity,
              and scored proportionally against solutions provided by other
              participants. Participants can improve their code as many times as
              they like during the competition. They can also earn points toward
              their total score by earning achievement badges, which are
              rewarded for achieving a variety of accomplishments throughout the
              competition. All possible badges and their conditions are visible
              on the participant's profile page. At 9am EST, October 28th 2020,
              the Leaderboards will lock and the Global Coding Champion will be
              announced.
            </p>
            <p style={{ fontSize: '16px' }}>
              The competition has been entirely designed, built and run by our
              fellow TAs.
            </p>
          </IonText>

          <div className="GreyBar">
            <div>
              <div className="icon-group">
                <img src={calendar} style={{ height: '50px' }} />
                <h3>
                  {' '}
                  3 <br /> week{' '}
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
                The challenge will run for 3 week, from October 7th to October
                28th.
              </p>
            </div>
            <div>
              <div className="icon-group">
                <img src={globe} style={{ height: '50px' }} />
                <h3>
                  7 <br /> regions
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
                Competition is split across 7 regions: UK, USA & Canada, Europe,
                India, Southeast Asia, Switzerland, and the rest of the world.
              </p>
            </div>
            <div>
              <div className="icon-group">
                <img src={questions} style={{ height: '50px' }} />
                <h3>
                  9 <br /> questions
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
                9 original questions for you to answer using any of 5 popular
                programming languages.
              </p>
            </div>
            <div>
              <div className="icon-group">
                <img src={prizes} style={{ height: '50px' }} />
                <h3>
                  23 <br /> prizes
                </h3>
              </div>
              <p style={{ fontSize: '16px' }}>
                There are prizes for the best individual coder globally, the top
                3 coders of all 7 regions, and the coder with the most
                engagement badges.
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HowToPlay;
