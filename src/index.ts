import { readdirSync } from 'fs';
import { join } from 'path';
import { IConfigItem } from './type';

const ruleFiles = readdirSync(join(__dirname, 'rules'));
const res: IConfigItem[] = [];
ruleFiles.forEach((subPath) => {
  if (/\.d\.ts/.test(subPath)) {
    return;
  }
  const item = require(join(__dirname, 'rules', subPath)).default;
  res.push(item);
});

export default res;
