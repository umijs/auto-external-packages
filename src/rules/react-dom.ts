import { IConfigItem } from '../type';

const rules: IConfigItem = {
  key: 'react-dom',
  global: 'ReactDOM',
  scripts: {
    development: ['umd/react-dom.development.js'],
    production: ['umd/react-dom.production.min.js'],
  },
  dependencies: ['react'],
};

export default rules;
