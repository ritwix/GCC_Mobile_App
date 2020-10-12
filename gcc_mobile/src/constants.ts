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

export const GITHUB_OAUTH_CLIENT_ID = {
  LOCAL: '3a4fd05f700987052d1e', // GCC-2020-Local Client ID
  TEST: '17add43b05758bd00913', // GCC-2020-Test Client ID
  PROD: '51d651734bea5aaf4da7',
};

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
  username: 'gcc2020webapp',
  password: 'gcc-2020-webapp-789',
};

export const LINK_TO_PRIVACY_STATEMENT =
  'http://www.credit-suisse.com/pwp/hr/en/codingchallenge/static/media/privacystatement.09d6279c.pdf';

export const LINK_TO_TERMS_AND_CONDITIONS = 
  'https://www.credit-suisse.com/pwp/hr/en/codingchallenge/static/media/termsandconditions.b3b4a24f.pdf';