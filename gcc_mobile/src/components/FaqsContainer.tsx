import { Faq } from "../model/Faq";
import axios from "axios";
import { useState, useEffect } from "react";
import { IonContent, IonIcon, IonLabel } from "@ionic/react";
import React from "react";
import {
  arrowDown,
  arrowForward,
  caretDown,
  caretForward,
} from "ionicons/icons";
import "./FaqsContainer.css";

interface FaqContainerProps {
  faq: Faq;
}

const FaqContainer: React.FC<FaqContainerProps> = ({ faq }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <br />
      <IonIcon icon={caretDown} hidden={!isShown} />
      <IonIcon icon={caretForward} hidden={isShown} />
      <IonLabel className="faq-item" onClick={() => setIsShown(!isShown)}>
        {faq.question}
      </IonLabel>
      {isShown && <div className="faq-item-hidden">{faq.answer}</div>}
      <br />
    </>
  );
};

const FaqsContainer: React.FC = () => {
  const API_URL = "https://gcc-backend-dev-temp.herokuapp.com/faqs";
  const [faqs, setFaqs] = useState<Faq[]>();

  useEffect(() => {
    axios.get<Faq[]>(API_URL).then(({ data }) => {
      setFaqs(data);
      console.log(data);
    });
  }, []);

  if (faqs && faqs?.length > 0) {
    return (
      <IonContent>
        {faqs?.map((faq) => (
          <FaqContainer faq={faq}></FaqContainer>
        ))}
      </IonContent>
    );
  } else {
    return (
      <IonContent>
        <IonLabel>No FAQs found. Please try after some time...</IonLabel>
      </IonContent>
    );
  }
};

export default FaqsContainer;
