interface IUrls {
  development: string[];
  production: string[];
}

export interface IConfigItem {
  key: string; // library name
  global?: string | ((context: string, request: string, callback: any) => any);

  scripts: IUrls; // js url
  styles?: IUrls; // style url
  polyfillUrls?: IUrls;

  polyfillExclude?: string[]; // polyfills
  dependencies?: string[]; // external 之间的依赖关系
}
