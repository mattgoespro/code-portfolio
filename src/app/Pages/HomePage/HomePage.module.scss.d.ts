declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    banner: string;
    'banner-content': string;
    'banner-logo': string;
    'banner-logo-alias': string;
    'banner-text': string;
    'color-angular': string;
    'color-c-sharp': string;
    'color-dart': string;
    'color-docker': string;
    'color-express': string;
    'color-flutter': string;
    'color-java': string;
    'color-javascript': string;
    'color-node': string;
    'color-postgresql': string;
    'color-react': string;
    'color-sass': string;
    'color-spring': string;
    'color-typescript': string;
    'content-wave-divider': string;
    'home-page': string;
    label: string;
    'label-text': string;
    'label-underline': string;
    list: string;
    'skill-img': string;
    'skill-tool-img': string;
    'software-skill-wrapper': string;
    title: string;
    'titled-content-list': string;
  }
}

declare const HomePageModuleScssModule: HomePageModuleScssNamespace.IHomePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageModuleScssNamespace.IHomePageModuleScss;
};

export = HomePageModuleScssModule;
