import { Faq } from '../model/Faq'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IonContent, IonCard, IonCardContent, IonIcon, IonItem, IonLabel } from '@ionic/react'
import React from 'react'
import { arrowDownCircleOutline, arrowForwardCircleOutline } from 'ionicons/icons'

interface FaqContainerProps {
    faq: Faq
}

const FaqContainer: React.FC<FaqContainerProps> = ({ faq }) => {
    const [isShown, setIsShown] = useState(false)

    return (
        <IonCard key={faq.id} onClick={() => setIsShown(!isShown)}>
            <IonItem>
                <IonIcon icon={arrowDownCircleOutline} slot="end" hidden={!isShown} />
                <IonIcon icon={arrowForwardCircleOutline} slot="end" hidden={isShown} />
                <IonLabel>{faq.question}</IonLabel>
            </IonItem>
            <IonCardContent hidden={!isShown}>
                <IonLabel>
                    {faq.answer}
                </IonLabel>
            </IonCardContent>
        </IonCard>
    )
}

const FaqsContainer: React.FC = () => {
    const API_URL = 'https://gcc-global-dev.herokuapp.com/faqs'
    const [faqs, setFaqs] = useState<Faq[]>()

    useEffect(() => {
        getFaqs();
    }, [])

    const getFaqs = () => {
        setFaqs([]);

        axios.get<Faq[]>(API_URL)
            .then(({ data }) => {
                setFaqs(data)
                console.log(data)
            })
    }

    return (
        <IonContent>
            {
                faqs?.map((faq) => (
                    <FaqContainer faq={faq}>

                    </FaqContainer>
                ))
            }
        </IonContent>
    );
};

export default FaqsContainer;