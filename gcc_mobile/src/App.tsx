import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import ReferAFriend from './pages/ReferAFriend';
import Questions from './pages/Questions';
import HowToPlay from './pages/HowToPlay';
import Profile from './pages/Profile';
import IndividualLeaderboard from './pages/IndividualLeaderboard';

import SmallInfoIcon from './assets/icons/icons_small_info_2/icons_small_info_2.png';
import SmallProfileIcon from './assets/icons/icons_small_profile/icons_small_profile.png';
import SmallChatIcon from './assets/icons/icons_small_chat/icons_small_chat.png';
import SmallStarIcon from './assets/icons/icons_small_favourite_filled/icons_small_favourite_filled.png';
import SmallAlertIcon from './assets/icons/icons_small_alert1/icons_small_alert1.png';
import LargeTrophyIcon from './assets/icons/icons_large_trophy/icons_large_trophy.png';

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

          <IonTabBar slot="bottom">
            <IonTabButton tab="profile" href="/profile">
              <img src={SmallProfileIcon} alt="right arrow icon" />
            </IonTabButton>
            <IonTabButton tab="leaderboard" href="/leaderboard">
              <img src={SmallStarIcon} alt="right arrow icon" />
            </IonTabButton>
            <IonTabButton tab="Questions" href="/questions">
              <img src={SmallInfoIcon} alt="right arrow icon" />
            </IonTabButton>
            <IonTabButton tab="news" href="/news">
              <img src={SmallChatIcon} alt="right arrow icon" />
            </IonTabButton>
            <IonTabButton tab="HowToPlay" href="/howToPlay">
              <img src={LargeTrophyIcon} height="22" alt="right arrow icon" />
            </IonTabButton>
            <IonTabButton tab="faqs" href="/faqs">
              <img src={SmallAlertIcon} alt="right arrow icon" />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      <ExploreContainer name='dummy'/>
    </IonApp>
  </UserContextInit>
);

export default App;
