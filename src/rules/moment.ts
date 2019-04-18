import { IConfigItem } from '../type';

const rules: IConfigItem = {
  key: 'moment',
  global: 'moment',
  scripts: {
    development: ['min/moment-with-locales.js'],
    production: ['min/moment-with-locales.min.js'],
  },
};

export default rules;
