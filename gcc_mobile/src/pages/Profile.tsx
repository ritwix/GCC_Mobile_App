import React from 'react';
import { IonAvatar, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css';
import { Plugins } from '@capacitor/core';
import { useUserContext } from '../context/user';
const { Browser } = Plugins;

const CLIENT_ID = {
  LOCAL: '3a4fd05f700987052d1e', // GCC-2020-Local Client ID
  TEST: '17add43b05758bd00913', // GCC-2020-Test Client ID
}

const githubLogin = async () => {
  await Browser.open({
    url: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID.TEST}`,
    windowName: '_self',
  });
}

const Profile: React.FC = () => {
  const { user } = useUserContext();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          {
            user?.loggedInGitHub ? (
              <>
                <IonAvatar>
                  <img src={user.githubAvatar} />
                </IonAvatar>
                <strong>{`Welcome, ${user?.githubUsername}!`}</strong>
              </>
            ) : (
                <IonButton onClick={githubLogin}>Login via Github</IonButton>
              )
          }
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Profile;
