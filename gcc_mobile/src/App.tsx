import React, { constructor } from 'react';
import './App.css';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonButtons,
  IonHeader,
  IonImg
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, downloadSharp } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Questions from './pages/Questions';
import HowToPlay from './pages/HowToPlay';



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

/*screen orientation*/
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';



const App: React.FC = () => (
  
  <IonApp>
    
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab3" component={Tab3} exact={true}/>
          <Route path="/Questions" component={Questions} exact={true} />
          <Route path="/HowToPlay" component={HowToPlay}  />
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
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Refer a friend</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Questions" href="/Questions">
            <IonIcon icon={ellipse} />
            <IonLabel>Questions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="HowToPlay" href="/HowToPlay">
            <IonIcon icon={triangle} />
            <IonLabel>How to play</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);




export default App;
