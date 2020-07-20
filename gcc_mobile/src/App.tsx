import React from 'react';
import './App.css';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, triangle, helpCircle, square } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';

import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';

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

  <IonApp>

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />

          <Route path="/faqs" component={FaqTab} />
          <Route path="/tab3" component={Tab3} exact={true} />
          <Route path="/tab4" component={Tab4} exact={true} />
          <Route path="/tab5" component={Tab5} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />


        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>My profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Leaderboard</IonLabel>
          </IonTabButton>

          <IonTabButton tab="faqs" href="/faqs">
            <IonIcon icon={helpCircle} />
            <IonLabel>F.A.Q.</IonLabel>
          </IonTabButton>

          {/* <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Refer a friend</IonLabel>
          </IonTabButton> */}
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={ellipse} />
            <IonLabel>Questions</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={triangle} />
            <IonLabel>News</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
