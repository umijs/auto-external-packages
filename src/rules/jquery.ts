import { IConfigItem } from '../type';

const rules: IConfigItem = {
  key: 'jquery',
  global: 'jQuery',
  scripts: {
    development: ['dist/jquery.js'],
    production: ['dist/jquery.min.js'],
  },
};

export default rules;
