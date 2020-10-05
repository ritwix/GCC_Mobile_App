import './NewsContainer.css';
import { Headlines, Region, Headline } from '../model/News';
import { IonContent, IonSelect, IonSelectOption, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SmallTrendIcon from '../assets/icons/icons_small_trend/icons_small_trend.png';

interface HeadlineProps {
  headline: Headline;
}

const HeadlineContainer: React.FC<HeadlineProps> = ({ headline }) => {
  const history = useHistory();
  return (
    <div
      className="news-item"
      onClick={() => {
        history.push(`/news/${headline.id}`);
      }}
    >
      <div>
        <h3>{headline.title}</h3>
        <h4>Author: {headline.author}</h4>
        <p>{headline.blurb}</p>
      </div>
      <img src={SmallTrendIcon} alt="right arrow icon" />
    </div>
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
        `https://gcc-global.herokuapp.com/news/headlines/${value}?from=0&limit=100`
      )
      .then(({ data }) => {
        console.log('Got headlines: ', data);
        setHeadlines(data.headlines);
      });
  };

  return (
    <IonContent>
      <div className="region-select-group">
        <IonLabel>Select Region: </IonLabel>
        <IonSelect
          value={region}
          interface="popover"
          placeholder="Select Region"
          onIonChange={(e) => onRegionChanged(e.detail.value)}
        >
          {regions.map((r) => (
            <IonSelectOption key={r} value={r}>{r}</IonSelectOption>
          ))}
        </IonSelect>
      </div>

      {headlines?.length === 0 && (
        <IonContent>
          <IonLabel>No Headlines found for your region.</IonLabel>
        </IonContent>
      )}

      {(headlines || []).length > 0 && (
        headlines?.map((h) => (
          <HeadlineContainer key={h.id} headline={h} />
        ))
      )}
    </IonContent>
  );
};

export default NewsContainer;
