import "./NewsTabDetail.css";
import { RouteComponentProps } from "react-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { News } from "../model/News";
import axios from "axios";

interface NewsDetailProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const NewsTabDetail: React.FC<NewsDetailProps> = ({ match }) => {
  const [news, setNews] = useState<News>();

  useEffect(() => {
    getAndSetNews();
  }, []);

  const getAndSetNews = () => {
    setNews(undefined);
    axios
      .get<News>(
        `https://gcc-global-dev.herokuapp.com/news/${match.params.id}`
      )
      .then(({ data }) => {
        setNews(data);
      });
  };

  if (news != null && news.article.body != null) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{news.article.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {news != null && news.article.body != null && (
            <div id="innerHTML" dangerouslySetInnerHTML={{ __html: news.article.body }} />
          )}
        </IonContent>
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <IonContent>
          <IonLabel>Something went wrong. Please try after some time!</IonLabel>
        </IonContent>
      </IonPage>
    );
  }
};

export default NewsTabDetail;
