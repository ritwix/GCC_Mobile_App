import React, { useState, useEffect } from 'react';
import './ExploreContainer.css';

// FCM
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';
import { IonButton } from '@ionic/react';

const { PushNotifications } = Plugins;

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [notifications, setNotifications] = useState<PushNotification[]>([])

  const push = function() {
    console.log('Adding listener for FCM');
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ' + token.value);
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with your setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.log('Error on registration: ' + JSON.stringify(error));
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('Push Notification: ' + JSON.stringify(notification))
        const notif = notifications;
        notif.push(notification)
        alert('Got' + JSON.stringify(notification))
        // setNotifications(notif)
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        console.log('Push Notification: ' + JSON.stringify(notification))
        const notif = notifications;
        notif.push(notification.notification)
        alert('Got' + JSON.stringify(notification))
        // setNotifications(notif)
      }
    );
  }

  useEffect(() => {
    push();
  })

  return (
    // <div className="container">
    //   <strong>{name}</strong>
    //   <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    // </div>
    <IonButton expand="full" onClick={() => push()}>Register for Push Notification</IonButton>
  );
};



export default ExploreContainer;
