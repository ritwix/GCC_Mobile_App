import moment from 'moment-timezone';

const REACT_APP_CHALLENGE_START_TIME='2020-10-07T14:00:00'
const REACT_APP_CHALLENGE_END_TIME='2020-10-28T14:00:00'




export const codingChallengeStarted = () => {
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

