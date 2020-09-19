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
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {
  ellipse,
  triangle,
  helpCircle,
  newspaperOutline,
} from 'ionicons/icons';

import ReferAFriend from './pages/ReferAFriend';
import Questions from './pages/Questions';
import HowToPlay from './pages/HowToPlay';
import Profile from './pages/Profile';
import TeamLeaderboard from './pages/TeamLeaderboard';

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
import ExploreContainer from './components/ExploreContainer';

const App: React.FC = () => (
  <UserContextInit>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact={true} />
            <Route
              path="/leaderboard"
              component={TeamLeaderboard}
              exact={true}
            />
            <Route path="/faqs" component={FaqTab} exact={true} />
            <Route path="/:tab(news)" component={NewsTab} exact={true} />
            <Route path="/:tab(news)/:id" component={NewsTabDetail} />
            <Route path="/referAFriend" component={ReferAFriend} exact={true} />
            <Route path="/questions" component={Questions} exact={true} />
            <Route path="/howToPlay" component={HowToPlay} />
            <Route
              path="/"
              render={() => <Redirect to="/profile" />}
              exact={true}
            />
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
            <IonTabButton tab="news" href="/news">
              <IonIcon icon={newspaperOutline} />
              <IonLabel>News</IonLabel>
            </IonTabButton>
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
      <ExploreContainer name='dummy'/>
    </IonApp>
  </UserContextInit>
);

export default App;
