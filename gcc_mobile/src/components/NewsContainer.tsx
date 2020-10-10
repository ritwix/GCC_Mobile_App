import "./NewsContainer.css";
import { Headlines, Region, RegionOptions, Headline } from "../model/News";
import { IonContent, IonSelect, IonSelectOption, IonLabel } from "@ionic/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SmallTrendIcon from "../assets/icons/icons_small_trend/icons_small_trend.png";
import { GCC_BASE_URL } from "../constants";

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
  // const regions = RegionOptions;
  const [region, setRegion] = useState<string>(Region.UK);
  const [headlines, setHeadlines] = useState<Headline[]>();

  useEffect(() => {
    onRegionChanged(Region.UK);
  }, []);

  const onRegionChanged = (value: string) => {
    console.log("Region changed: " + value);
    const region = value as Region;
    setRegion(value);
    setHeadlines([]);

    axios
      .get<Headlines>(
        `${GCC_BASE_URL}/news/headlines/${value}?from=0&limit=100`
      )
      .then(({ data }) => {
        console.log("Got headlines: ", data);
        setHeadlines(data.headlines);
      });
  };

  return (
    <IonContent>
      <div className="region-select-group">
        <IonLabel>Select Region: </IonLabel>
        <select
        className="filter-select"
          value={region}
          // interface="alert"
          placeholder="Select Region"
          onChange={(e) => onRegionChanged(e.target.value)}
        >
          {RegionOptions.map(({ text, value }) => (
            <option key={text} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>

      {headlines?.length === 0 && (
        <IonContent>
          <IonLabel>No Headlines found for your region.</IonLabel>
        </IonContent>
      )}

      {(headlines || []).length > 0 &&
        headlines?.map((h) => <HeadlineContainer key={h.id} headline={h} />)}
    </IonContent>
  );
};

export default NewsContainer;
