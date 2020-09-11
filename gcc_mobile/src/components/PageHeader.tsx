import React from 'react';
import { IonHeader, IonToolbar } from '@ionic/react';
import './PageHeader.css';
import CsLogo from '../assets/logo/credit_suisse_sp_rgb_fo_100mm.png';

const PageHeader: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  return (
    <IonHeader>
      <IonToolbar>
        <div className="cs-toolbar">
          <h3>{title}</h3>
          <a href="https://www.credit-suisse.com/in/en.html">
          <img src={CsLogo} alt="Credit Suisse Logo" />
          </a>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
