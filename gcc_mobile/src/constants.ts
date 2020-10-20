import {
  BASIC_AUTH_USERNAME,
  BASIC_AUTH_PASSWORD,
} from './environment';

export {
  GITHUB_OAUTH_CLIENT_ID,
} from './environment';

export enum Region {
  UK = 'uk',
  AMC = 'ac',
  INDIA = 'in',
  EUROPE = 'eu',
  SEA = 'se',
  ROW = 'rw',
  GLOBAL = 'gl',
  DEFAULT = 'na',
  SWITZERLAND = 'ch',
}

// export const GCC_BASE_URL = `https://gcc-global-dev.herokuapp.com`;
export const GCC_BASE_URL = `https://gcc-global.herokuapp.com`;

export const regionNameMap: { [x in Region]: string } = {
  [Region.SEA]: 'SEA',
  [Region.INDIA]: 'INDIA',
  [Region.EUROPE]: 'EUROPE',
  [Region.SWITZERLAND]: 'SWIS',
  [Region.UK]: 'UK',
  [Region.AMC]: 'AMC',
  [Region.ROW]: 'ROW',
  [Region.GLOBAL]: 'GLOBAL',
  [Region.DEFAULT]: 'GLOBAL',
};

export const COLOR = {
  gray3: '#dadada',
  gray4: '#a8a8a7',
  gray5: '#7c7c7b',
  gray6: '#575756',
};

export const API_AUTHENTICATION = {
  username: BASIC_AUTH_USERNAME,
  password: BASIC_AUTH_PASSWORD,
};

export const LINK_TO_PRIVACY_STATEMENT =
  'http://www.credit-suisse.com/pwp/hr/en/codingchallenge/static/media/privacystatement.09d6279c.pdf';

export const LINK_TO_TERMS_AND_CONDITIONS = 
  'https://www.credit-suisse.com/pwp/hr/en/codingchallenge/docs/termsandconditions.pdf';