import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonImg,
  IonContent,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {
  helpCircle,
  newspaperOutline,
  trophy,
  person,
  ribbon,
  alertCircle,
} from 'ionicons/icons';



import ReferAFriend from './pages/ReferAFriend';
import Questions from './pages/Questions';
import HowToPlay from './pages/HowToPlay';
import Profile from './pages/Profile';
import TeamLeaderboard from './pages/TeamLeaderboard';
import IndividualLeaderboard from './pages/IndividualLeaderboard';

import { UserContextInit } from './context/user';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import FaqTab from './pages/FaqTab';
import NewsTab from './pages/NewsTab';
import NewsTabDetail from './pages/NewsTabDetail';


/* Screen orientation fixed to landscape*/
//window.screen.orientation.lock('landscape');

const App: React.FC = () => (
  <UserContextInit>
    
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/leaderboard" component={IndividualLeaderboard} exact={true} />
            <Route path="/questions" component={Questions} exact={true} />
            <Route path="/:tab(news)" component={NewsTab} exact={true} />
            <Route path="/:tab(news)/:id" component={NewsTabDetail} />
            <Route path="/referAFriend" component={ReferAFriend} exact={true} />
            <Route path="/howToPlay" component={HowToPlay} exact={true}/>
            <Route path="/faqs" component={FaqTab}  />
            <Route
              path="/"
              render={() => <Redirect to="/profile" />}
              exact={true}
            />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" style={{width:'100%',allign:'right'}}>
           
            <IonTabButton tab="profile" href="/profile">
              <IonIcon size="large" icon={person} />
              <IonLabel></IonLabel>
            </IonTabButton>
            <IonTabButton tab="leaderboard" href="/leaderboard">
              <IonIcon size="large" icon={ribbon} />
              <IonLabel></IonLabel>
            </IonTabButton>
            <IonTabButton tab="Questions" href="/questions">
              <IonIcon size="large" icon={helpCircle} />
              <IonLabel></IonLabel>
            </IonTabButton>
            <IonTabButton tab="news" href="/news">
              <IonIcon size="large" icon={newspaperOutline} />
              <IonLabel></IonLabel>
            </IonTabButton>
            <IonTabButton tab="HowToPlay" href="/howToPlay">
              <IonIcon size="large" icon={trophy} />
              <IonLabel></IonLabel>
            </IonTabButton>
            <IonTabButton tab="faqs" href="/faqs">
              <IonIcon size="large" icon={alertCircle} />
              <IonLabel></IonLabel>
            </IonTabButton>
          
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </UserContextInit>
);

export default App;
