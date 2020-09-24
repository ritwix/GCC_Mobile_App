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

export const GCC_BASE_URL = `https://gcc-global-dev.herokuapp.com`;

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