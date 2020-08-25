import { Faq } from '../model/Faq';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IonContent, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import { arrowDown, arrowForward } from 'ionicons/icons';
import './FaqsContainer.css';

interface FaqContainerProps {
  faq: Faq;
}

const FaqContainer: React.FC<FaqContainerProps> = ({ faq }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <li key={faq.id} onClick={() => setIsShown(!isShown)}>
      <div className="faq-item">
        <IonLabel>{faq.question}</IonLabel>
        <IonIcon icon={arrowDown} hidden={!isShown} />
        <IonIcon icon={arrowForward} hidden={isShown} />
      </div>
      {isShown && (
        <div className="faq-item__hidden">
          <IonLabel>{faq.answer}</IonLabel>
        </div>
      )}
    </li>
  );
};

const FaqsContainer: React.FC = () => {
  const API_URL = 'https://gcc-global-dev.herokuapp.com/faqs';
  const [faqs, setFaqs] = useState<Faq[]>();

  useEffect(() => {
    getFaqs();
  }, []);

  const getFaqs = () => {
    setFaqs([]);

    axios.get<Faq[]>(API_URL).then(({ data }) => {
      setFaqs(data);
      console.log(data);
    });
  };

  return (
    <IonContent>
      <ul>
        {faqs?.map((faq) => (
          <FaqContainer faq={faq}></FaqContainer>
        ))}
      </ul>
    </IonContent>
  );
};

export default FaqsContainer;
