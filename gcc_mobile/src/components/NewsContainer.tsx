import './NewsContainer.css';
import { Headlines, Region, Headline } from '../model/News';
import { IonContent, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
interface HeadlineProps {
  headline: Headline;
}

const HeadlineContainer: React.FC<HeadlineProps> = ({ headline }) => {
  const history = useHistory();
  return (
    <li
      className="news-item"
      onClick={() => {
        history.push(`/news/${headline.id}`);
      }}
    >
      <h2>{headline.title}</h2>
      <h3>Author: {headline.author}</h3>
      <p>{headline.blurb}</p>
    </li>
  );
};

const NewsContainer: React.FC = () => {
  const regions = Object.keys(Region);
  const [region, setRegion] = useState<string>(Region.UK);
  const [headlines, setHeadlines] = useState<Headline[]>();

  useEffect(() => {
    onRegionChanged(Region.UK);
  }, []);

  const onRegionChanged = (value: string) => {
    console.log('Region changed: ' + value);
    setRegion(value);
    setHeadlines([]);
    // TODO: change to pagination @im-pratham
    axios
      .get<Headlines>(
        `https://gcc-global-dev.herokuapp.com/news/headlines/${value}?from=0&limit=100`
      )
      .then(({ data }) => {
        console.log('Got headlines: ' + data);
        setHeadlines(data.headlines);
      });
  };

  return (
    <IonContent>
      <div className="region-select-group">
        <IonLabel>Select Region: </IonLabel>
        <IonSelect
          value={region}
          placeholder="Select Region"
          onIonChange={(e) => onRegionChanged(e.detail.value)}
        >
          {regions.map((r) => (
            <IonSelectOption value={r}>{r}</IonSelectOption>
          ))}
        </IonSelect>
      </div>

      {headlines?.length === 0 && (
        <IonLabel>No Headlines found for your region.</IonLabel>
      )}

      {(headlines || []).length > 0 && (
        <ul>
          {headlines?.map((h) => (
            <HeadlineContainer key={h.id} headline={h} />
          ))}
        </ul>
      )}
    </IonContent>
  );
};

export default NewsContainer;
