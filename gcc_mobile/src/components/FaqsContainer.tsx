import { Faq } from '../model/Faq';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IonContent, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import { chevronDown, chevronForward } from 'ionicons/icons';
import './FaqsContainer.css';
import { GCC_BASE_URL } from '../constants';

interface FaqContainerProps {
  faq: Faq;
}

const FaqContainer: React.FC<FaqContainerProps> = ({ faq }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsShown((isShown) => !isShown)}
      >
        <h4>{faq.question}</h4>
        <IonIcon icon={chevronDown} hidden={!isShown} />
        <IonIcon icon={chevronForward} hidden={isShown} />
      </div>
      {isShown && <div className="faq-item-hidden">{faq.answer}</div>}
    </div>
  );
};

const FaqsContainer: React.FC = () => {
  const API_URL = `${GCC_BASE_URL}/faqs`;
  const [faqs, setFaqs] = useState<Faq[]>();

  useEffect(() => {
    axios.get<Faq[]>(API_URL).then(({ data }) => {
      const faqs = data?.filter(faq => faq?.question && faq?.answer);
      setFaqs(faqs);
    });
  }, []);

  if (faqs && faqs?.length > 0) {
    return (
      <>
        {faqs?.map((faq) => (
          <FaqContainer faq={faq} key={faq.id}></FaqContainer>
        ))}
      </>
    );
  } else {
    return (
      <>
        <IonLabel>No FAQs found. Please try after some time...</IonLabel>
      </>
    );
  }
};

export default FaqsContainer;
