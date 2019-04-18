import { IConfigItem } from '../type';

const rules: IConfigItem = {
  key: 'react',
  global: 'React',
  scripts: {
    development: ['umd/react.development.js'],
    production: ['umd/react.production.min.js'],
  },
  polyfillUrls: {
    development: ['umd/react.profiling.min.js'],
    production: ['umd/react.profiling.min.js'],
  },
  polyfillExclude: ['core-js/es6/map', 'core-js/es6/set'],
};

export default rules;
