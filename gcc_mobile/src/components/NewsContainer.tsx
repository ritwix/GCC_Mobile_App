import './NewsContainer.css'
import { Headlines, Region, Headline } from '../model/News';
import { IonContent, IonSelect, IonSelectOption, IonItem, IonList, IonLabel, IonCard, IonCardHeader, IonHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';

interface HeadlineProps {
    headline: Headline
}

const HeadlineContainer: React.FC<HeadlineProps> = ({ headline }) => {
    return (
        <IonCard routerLink={`/news/${headline.id}`}>
            <IonCardHeader>
                <IonCardTitle>{headline.title}</IonCardTitle>
                <IonCardSubtitle>{headline.author}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                {headline.blurb}
            </IonCardContent>
        </IonCard>
    );
}

const NewsContainer: React.FC = () => {
    const regions = Object.keys(Region);
    const [region, setRegion] = useState<string>(Region.UK);
    const [headlines, setHeadlines] = useState<Headline[]>();

    useEffect(() => {
        onRegionChanged(Region.UK);
    }, [])

    const onRegionChanged = (value: string) => {
        console.log('Region changed: ' + value);
        setRegion(value);
        setHeadlines([]);
        // TODO: change to pagination
        axios.get<Headlines>(`https://gcc-global-dev.herokuapp.com/news/headlines/${value}?from=0&limit=100`)
            .then(({ data }) => {
                console.log('Got headlines: ' + data)
                setHeadlines(data.headlines);
            })
    };

    return (
        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel>Region</IonLabel>
                    <IonSelect value={region} placeholder='Select Region' onIonChange={e => onRegionChanged(e.detail.value)}>
                        {
                            regions.map((r) =>
                                <IonSelectOption value={r}>{r}</IonSelectOption>
                            )
                        }
                    </IonSelect>
                </IonItem>
            </IonList>
            <br />
            {
                headlines?.length === 0 &&
                <IonLabel>No Headlines found for your region.</IonLabel>
            }
            {
                headlines?.length > 0 &&
                headlines?.map((h) => (
                    <HeadlineContainer key={h.id} headline={h} />
                ))
            }
        </IonContent>
    );
}

export default NewsContainer;