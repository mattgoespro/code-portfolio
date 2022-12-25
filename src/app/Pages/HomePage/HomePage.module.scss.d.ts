declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    alias: string;
    banner: string;
    'banner-content': string;
    'banner-logo': string;
    'banner-logo-alias': string;
    'banner-text': string;
    'border-color-experienced': string;
    'bottom-wave-blue': string;
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
    'home-page': string;
    'others-list': string;
    'others-section': string;
    'others-text': string;
    skill: string;
    'skill-brand-icon': string;
    'skill-list': string;
    'skill-list-item': string;
    'skill-name': string;
    'skill-name-underline': string;
    'skill-tool-img': string;
    'skills-section': string;
    'skills-section-languages': string;
    'top-wave-blue': string;
    'top-wave-orange': string;
  }
}

declare const HomePageModuleScssModule: HomePageModuleScssNamespace.IHomePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageModuleScssNamespace.IHomePageModuleScss;
};

export = HomePageModuleScssModule;
