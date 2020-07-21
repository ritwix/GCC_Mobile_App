import React from 'react';
import axios from 'axios';
import { IonContent, IonHeader, IonPage, IonIcon, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Score, Contestant } from '../ducks/individualleaderboard'
import { User } from '../ducks/userProfile'

type Props = {
    user: User
}

const positionWithinTeam = (pos: number, team: string) => {
    if (pos === -1) {
        return `${team} aren't currently on the Global Leaderboard`
    }
    return `#${pos} in ${team}`
}

const BannerProfile = ({user}: Props) => (
    <IonGrid>
       <IonRow>
            <IonCol size="3">
                <img src={user.gitAvatar} />
            </IonCol>
            <IonCol size="6">
                <IonHeader>{user.name}</IonHeader>
                <IonHeader>{user.positionWithinTeam} {user.team}</IonHeader>
                <IonHeader>{user.region}</IonHeader>
                    {/* <Header.Content as="h2">{user.name}</Header.Content>
                    <Header.Subheader>{positionWithinTeam(user.positionWithinTeam, user.team)}</Header.Subheader>
                    <Header.Subheader>{`#${user.position} in ${getFullNameForServerName(user.region)}`}</Header.Subheader> */}                
            </IonCol>
            <IonCol size="3">
                <IonImg  src={user.teamLogo}/>
            </IonCol>   
        </IonRow> 
    </IonGrid>
)

const socialMedia = (contestantLoggedIn: string, userId: string) => {
    if (contestantLoggedIn !== userId) {
        return (<div />)
    }
    return (
        <IonRow>
            <IonIcon size='large' name='facebook f' />
            <IonIcon size='large' name='instagram' />
            <IonIcon size='large' name='facebook messenger' />
            <IonIcon size='large' name='whatsapp' />
            <IonIcon size='large' name='linkedin' />
            {/* <IonIcon size='large' name='qrcode' color='black'/> */}
        </IonRow>
    )
}

export const tableHeader = () => (
    <IonRow>
        <IonCol>
            Question
        </IonCol>
        <IonCol>
            Correct
        </IonCol>
        <IonCol>
            Incorrect
        </IonCol>
        <IonCol>
            Timed Out
        </IonCol>
        <IonCol>
            Total
        </IonCol>
    </IonRow>
)

const tableContent = (score: Score) => (
    <IonRow>
        <IonCol className={'csBold'}>
            {score.questionNumber}
        </IonCol>
        <IonCol>
            {score.correct}
        </IonCol>
        <IonCol>
            {score.incorrect}
        </IonCol>
        <IonCol>
            {score.timedOut}
        </IonCol>
        <IonCol className={'csBold'}>
            {score.total.toFixed(2)}
        </IonCol>
    </IonRow>
)

const TestTable = (scores: Score[]) => (
    <IonGrid>
        {tableHeader()}
        {scores.map(tableContent)}
    </IonGrid>
)

const UserPage: React.FC = () => {
// const UserPage: React.FC = ({ details, userId, region, reloadUser, match, userLoading, currentGraph, changeGraph, loggedInContestant }: Props) => {
    // if (details == null || userId !== match.params.id) {
    //     if (!userLoading) {
    //         reloadUser(region, match.params.id)
    //     }
    //     return (
    //         <Container>
    //             <Loader active={true} inline='centered' />
    //         </Container>
    //     )
    // }
    // const user = details as User
    const user : User;
    return (
        <IonPage>
            <IonContent>
                {/* <IonGrid>
                    <IonRow>
                        <IonCol>Name</IonCol>
                        <IonCol>Name</IonCol>
                    </IonRow>
                </IonGrid> */}
            <IonGrid>
                <IonRow>
                    <IonCol size="7">
                        <IonGrid>
                            <IonRow>
                                <BannerProfile user={user} />
                            </IonRow>
                            <IonRow>
                                {/* {TestTable(user.scores)} */}
                            </IonRow>
                            {/* {socialMedia(loggedInContestant, userId)} */}
                        </IonGrid>
                    </IonCol>
                    {/* <IonCol width={8} floated='right'>
                        {renderGraph(currentGraph, match.params.id)}
                        <Pager
                            handlePrevious={() => changeGraph(currentGraph - 1, match.params.id)}
                            handleNext={() => changeGraph(currentGraph + 1, match.params.id)}
                            handleChange={changeGraph}
                            currentItem={currentGraph}
                            total={3}
                        />
                    </IonCol> */}
                </IonRow>
            </IonGrid>

            </IonContent>
        </IonPage>
    )
}