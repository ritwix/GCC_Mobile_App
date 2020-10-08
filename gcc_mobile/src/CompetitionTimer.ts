import moment from 'moment-timezone';
import { useEffect } from 'react';
import {startDate} from './App';
import {endDate} from './App';

var REACT_APP_CHALLENGE_START_TIME='2020-10-12T14:00:00';
var REACT_APP_CHALLENGE_END_TIME='2020-11-02T13:00:00'




export const codingChallengeStarted = () => {
    REACT_APP_CHALLENGE_START_TIME=startDate ? startDate : REACT_APP_CHALLENGE_START_TIME ;
    REACT_APP_CHALLENGE_END_TIME=endDate ? endDate : REACT_APP_CHALLENGE_END_TIME ;
    console.log(" REACT_APP_CHALLENGE_START_TIME:" + REACT_APP_CHALLENGE_START_TIME);
    console.log(" REACT_APP_CHALLENGE_END_TIME:" + REACT_APP_CHALLENGE_END_TIME);
    let start_time = moment.tz(REACT_APP_CHALLENGE_START_TIME, 'Europe/London')
    let end_time = moment.tz(REACT_APP_CHALLENGE_END_TIME, 'Europe/London')
    let time_now = getUniversalCurrentTime();
    // console.log(start_time);
    // console.log(time_now);
    // console.log(end_time);
    // console.log(time_now.isAfter(start_time));
    // console.log(time_now.isBefore(end_time));
    return time_now.isAfter(start_time) && time_now.isBefore(end_time)
}

export const codingChallengeEnded = () => {
    let end_time = moment.tz(process.env.REACT_APP_CHALLENGE_END_TIME, 'Europe/London')
    let time_now = getUniversalCurrentTime();
    return time_now.isAfter(end_time)
}

export const getUniversalCurrentTime = () => {
    return moment.tz(new Date(), 'Europe/London');
}

