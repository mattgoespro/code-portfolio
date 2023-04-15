declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    alias: string;
    'border-color-experienced': string;
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
    'fade-in-grow': string;
    frameworks: string;
    introduction: string;
    'introduction-text': string;
    languages: string;
    'languages-wave-bottom': string;
    'languages-wave-top': string;
    logo: string;
    'others-list': string;
    'others-section': string;
    'others-text': string;
    'others-wave-top': string;
    'page-wave-top': string;
    'section-text': string;
    skill: string;
    'skill-brand-icon': string;
    'skill-list': string;
    'skill-list-item': string;
    'skill-name': string;
    'skill-name-underline': string;
    'skill-section': string;
    'skill-tool-img': string;
  }
}

declare const HomePageModuleScssModule: HomePageModuleScssNamespace.IHomePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageModuleScssNamespace.IHomePageModuleScss;
};

export = HomePageModuleScssModule;
