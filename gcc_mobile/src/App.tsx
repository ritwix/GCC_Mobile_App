import React, { useState } from 'react';
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

import SvgIconsLargeInfo from './assets/icons/icons_large_info/SvgIconsLargeInfo';
import SvgIconsLargeNewspaper from './assets/icons/icons_large_newspaper/SvgIconsLargeNewspaper';
import SvgIconsLargeBulb from './assets/icons/icons_large_bulb/SvgIconsLargeBulb';
import SvgIconsLargeQuestion from './assets/icons/icons_large_question/SvgIconsLargeQuestion';
import SvgIconsLargeUser from './assets/icons/icons_large_user/SvgIconsLargeUser';
import SvgIconsLargeTraphy from './assets/icons/icons_large_trophy/SvgIconsLargeTraphy';

import { COLOR } from './constants';

const DEFAULT_SVG_STYLES = {
  height: '50',
  width: '50',
  viewBox: '5 -60 100 300',
};

enum Tab {
  Profile = 'profile',
  Leaderboard = 'leaderboard',
  Questions = 'questions',
  News = 'news',
  HowToPlay = 'HowToPlay',
  Faqs = 'faqs',
}

const App: React.FC = () => {
  // note: initializing to Tab.Profile for now because I haven't found a way to detect current ion tab
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.Profile);

  return (
    <UserContextInit>
      <IonApp>
        <IonReactRouter>
          <IonTabs
            onIonTabsDidChange={(e) => {
              setSelectedTab(e?.detail?.tab as Tab);
            }}
          >
            <IonRouterOutlet>
              <Route path="/profile" component={Profile} exact={true} />
              <Route
                path="/leaderboard"
                component={IndividualLeaderboard}
                exact={true}
              />
              <Route path="/questions" component={Questions} exact={true} />
              <Route path="/:tab(news)" component={NewsTab} exact={true} />
              <Route path="/:tab(news)/:id" component={NewsTabDetail} />
              <Route
                path="/referAFriend"
                component={ReferAFriend}
                exact={true}
              />
              <Route path="/howToPlay" component={HowToPlay} exact={true} />
              <Route path="/faqs" component={FaqTab} />
              <Route
                path="/"
                render={() => <Redirect to="/profile" />}
                exact={true}
              />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab={Tab.Profile} href="/profile">
                <SvgIconsLargeUser
                  {...DEFAULT_SVG_STYLES}
                  fill={selectedTab === Tab.Profile ? 'black' : COLOR.gray5}
                />
              </IonTabButton>
              <IonTabButton tab={Tab.Leaderboard} href="/leaderboard">
                <SvgIconsLargeTraphy
                  {...DEFAULT_SVG_STYLES}
                  fill={selectedTab === Tab.Leaderboard ? 'black' : COLOR.gray5}
                />
              </IonTabButton>
              <IonTabButton tab={Tab.Questions} href="/questions">
                <SvgIconsLargeQuestion
                  {...DEFAULT_SVG_STYLES}
                  fill={selectedTab === Tab.Questions ? 'black' : COLOR.gray5}
                />
              </IonTabButton>
              <IonTabButton tab={Tab.News} href="/news">
                <SvgIconsLargeNewspaper
                  {...DEFAULT_SVG_STYLES}
                  fill={selectedTab === Tab.News ? 'black' : COLOR.gray5}
                />
              </IonTabButton>
              <IonTabButton tab={Tab.HowToPlay} href="/howToPlay">
                <SvgIconsLargeBulb
                  {...DEFAULT_SVG_STYLES}
                  fill={selectedTab === Tab.HowToPlay ? 'black' : COLOR.gray5}
                />
              </IonTabButton>
              <IonTabButton tab={Tab.Faqs} href="/faqs">
                <SvgIconsLargeInfo
                  {...DEFAULT_SVG_STYLES}
                  fill={selectedTab === Tab.Faqs ? 'black' : COLOR.gray5}
                />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
        <ExploreContainer name="dummy" />
      </IonApp>
    </UserContextInit>
  );
};

export default App;
