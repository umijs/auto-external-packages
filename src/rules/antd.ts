import { IConfigItem } from '../type';
import { upperFirst, camelCase } from 'lodash';

function upcaseAntdComponent(component: string) {
  if (['notification', 'message'].indexOf(component) > -1) {
    return component;
  }
  return upperFirst(camelCase(component));
}

const rules: IConfigItem = {
  key: 'antd',
  scripts: {
    development: ['dist/antd-with-locales.js'],
    production: ['dist/antd-with-locales.min.js'],
  },
  styles: {
    development: ['dist/antd.css'],
    production: ['dist/antd.min.css'],
  },
  dependencies: ['react', 'react-dom', 'moment'],
  global: (_, request, callback) => {
    if (
      !/antd/.test(request) ||
      /style/.test(request) ||
      /locale-provider\/.*/.test(request)
    ) {
      return callback();
    }
    // @alipay/bigfish/antd/es/spin => antd/es/spin
    const antdRequest = (request || '').replace(/@alipay\/bigfish\//, '');
    // 未使用 babel-plugin-import
    if (antdRequest === 'antd') {
      return callback(null, ['antd'], 'window');
    }

    // 使用了 babel-plugin-import
    const [libraryName, , component] = antdRequest.split('/');
    return callback(
      null,
      [libraryName, upcaseAntdComponent(component)],
      'window',
    );
  },
};

export default rules;
