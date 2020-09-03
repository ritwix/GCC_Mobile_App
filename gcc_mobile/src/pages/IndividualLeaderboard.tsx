import React from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption, IonLabel, IonButton } from '@ionic/react';
import './IndividualLeaderboard.css';
import { IndLeaderContainer , UnivLeaderContainer} from '../components/LeaderboardContainer';
import PageHeader from '../components/PageHeader';
import { table } from 'console';

const GetIndLeader = (lowerLim: number, upperLim: number, region: string) => {
  var urlWithLimit = "https://gcc-global-dev.herokuapp.com/leaderboard/" + region + "?from="+ String(lowerLim) + "&limit=" + String(upperLim);
  return axios({
   url : urlWithLimit, 
   method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const GetUnivLeader = (lowerLim: number, upperLim: number, region: string) => {
  var urlWithLimit = "https://gcc-global-dev.herokuapp.com/teamleaderboard/" + region + "?from="+ String(lowerLim) + "&limit=" + String(upperLim);
  return axios({
   url : urlWithLimit, 
   method: 'get',
  }).then((response) => {
    console.log(response);
    return response.data;
  });
};

const IndLeaderboard: React.FC = () => {
  const [IndItems, setIndItems] = React.useState([]);
  const [Region, setRegion] = React.useState<string>("GLOBAL");
  React.useEffect(() => {
    GetIndLeader(1,10000,Region).then((data) => setIndItems(data.contestants));
  }, [Region]);

  const [UnivItems, setUnivItems] = React.useState([]);
  React.useEffect(() => {
    GetUnivLeader(1,10000,Region).then((data) => setUnivItems(data.contestants));
  }, [Region]);
 
  
  const [IndFilterColumn, setIndFilterColumn] = React.useState<string>("name");
  const [IndFilterBy, setIndFilterBy] = React.useState<string>("");

  const [UnivFilterColumn, setUnivFilterColumn] = React.useState<string>("teamName");
  const [UnivFilterBy, setUnivFilterBy] = React.useState<string>("");

  const [leaderboardType,setLeaderboardType] = React.useState<string>("Individual");

  console.log(UnivFilterBy);
  console.log(UnivFilterColumn);
  console.log(leaderboardType);
  return (
    <IonPage>
      <PageHeader title="Leaderboard" />
      <div className="filter-column">
      <IonLabel>Select Region:</IonLabel>
          <IonSelect placeholder = 'GLOBAL' onIonChange={(e) => setRegion(e.detail.value)}>
            <IonSelectOption value="GLOBAL">Global</IonSelectOption>
            <IonSelectOption value="AMC">USA & Canada</IonSelectOption>
            <IonSelectOption value="INDIA">India</IonSelectOption>
            <IonSelectOption value="EUROPE">Europe</IonSelectOption>
            <IonSelectOption value="SEA">South East Asia</IonSelectOption>
            <IonSelectOption value="SWIS">Switzerland</IonSelectOption>
            <IonSelectOption value="UK">UK & Ireland</IonSelectOption>
            <IonSelectOption value="ROW">Rest of the World</IonSelectOption>
          </IonSelect>
          
        
          <button className="cs-button" onClick = {()=> {setLeaderboardType ("Individual")}}>Individual</button>
        
          <button className="cs-button" onClick = {()=> {setLeaderboardType ("University")}}>University</button>
          </div>
  
      <IonContent >
      
    <div hidden={leaderboardType != "Individual"} >    
      <div className="filter-column">
      <IonLabel>Select Filter Column:</IonLabel>
          <IonSelect placeholder = 'Name' onIonChange={(e) => setIndFilterColumn(e.detail.value)}>
            <IonSelectOption value="pos">Rank</IonSelectOption>
            <IonSelectOption value="name">Name</IonSelectOption>
            <IonSelectOption value="region">Region</IonSelectOption>
            <IonSelectOption value="teamName">University</IonSelectOption>
          </IonSelect>
        
        
          <IonInput value={IndFilterBy} placeholder="Enter Filter" onIonChange={e => setIndFilterBy(e.detail.value!) }>Filter By:</IonInput>
        </div>
        <IonGrid>
          <IonRow className="ind_leaderboard_header">
            <IonCol >Rank</IonCol>
            <IonCol>Name</IonCol>
            <IonCol>Region</IonCol>
            <IonCol>University</IonCol>
            <IonCol>Score</IonCol>
          </IonRow>
          {IndItems.map((item) => {
            return ( IndFilterBy== undefined || IndFilterBy== '' || String(item[IndFilterColumn]).toLocaleLowerCase().indexOf(IndFilterBy.toLowerCase())!== -1 ?
              <IndLeaderContainer
                Rank={item['pos']}
                Name={item['name']}
                Region={item['region']} 
                University={item['teamName']}
                Score= {Number(item['total']).toFixed(2)}
              />
              : null
            )
          })}
        </IonGrid>
        </div>

        <div hidden={leaderboardType != "University"} >    
        <div className="filter-column">
      <IonLabel>Select Filter Column:</IonLabel>
          <IonSelect placeholder = 'University' onIonChange={(e) => setUnivFilterColumn(e.detail.value)}>
            <IonSelectOption value="pos">Rank</IonSelectOption>
            <IonSelectOption value="teamName">University</IonSelectOption>
          </IonSelect>
        
        
          <IonInput value={UnivFilterBy} placeholder="Enter Filter" onIonChange={e => setUnivFilterBy(e.detail.value!) }>Filter By:</IonInput>
        </div>
        <IonGrid>
          <IonRow className="univ_leaderboard_header">
            <IonCol >Rank</IonCol>
            
            <IonCol>University</IonCol>
            
            <IonCol>Score</IonCol>
          </IonRow>
          {UnivItems.map((item) => {
            return ( UnivFilterBy== undefined || UnivFilterBy== '' || String(item[UnivFilterColumn]).toLocaleLowerCase().indexOf(UnivFilterBy.toLowerCase())!== -1 ?
              <UnivLeaderContainer
                Rank={item['pos']}
                 
                University={item['teamName']}
                
                Score= {Number(item['total']).toFixed(2)}
              />
              : null
            )
          })}
        </IonGrid>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default IndLeaderboard;
