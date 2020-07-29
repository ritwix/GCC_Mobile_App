import React, { constructor } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { ellipse, triangle, helpCircle } from 'ionicons/icons';

import Leaderboard from './pages/Leaderboard';
import ReferAFriend from './pages/ReferAFriend';
import Questions from './pages/Questions';
import HowToPlay from './pages/HowToPlay';
import Profile from './pages/Profile';

import OAuthRedirectHandler from './components/OAuthRedirectHandler';
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

const App: React.FC = () => (
  <UserContextInit>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/leaderboard" component={Leaderboard} exact={true} />
            <Route path="/faqs" component={FaqTab} />
            <Route path="/referAFriend" component={ReferAFriend} exact={true} />
            <Route path="/questions" component={Questions} exact={true} />
            <Route path="/howToPlay" component={HowToPlay} />
            <Route path="/" component={OAuthRedirectHandler} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={triangle} />
              <IonLabel>My profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="leaderboard" href="/leaderboard">
              <IonIcon icon={ellipse} />
              <IonLabel>Leaderboard</IonLabel>
            </IonTabButton>
            <IonTabButton tab="faqs" href="/faqs">
              <IonIcon icon={helpCircle} />
              <IonLabel>F.A.Q.</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="referAFriend" href="/referAFriend">
            <IonIcon icon={square} />
            <IonLabel>Refer a friend</IonLabel>
          </IonTabButton> */}
            <IonTabButton tab="Questions" href="/questions">
              <IonIcon icon={ellipse} />
              <IonLabel>Questions</IonLabel>
            </IonTabButton>
            <IonTabButton tab="HowToPlay" href="/howToPlay">
              <IonIcon icon={triangle} />
              <IonLabel>How to play</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </UserContextInit>
);

export default App;
