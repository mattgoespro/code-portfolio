declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    alias: string;
    "border-color-experienced": string;
    "color-angular": string;
    "color-csharp": string;
    "color-dart": string;
    "color-docker": string;
    "color-express": string;
    "color-flutter": string;
    "color-java": string;
    "color-javascript": string;
    "color-node": string;
    "color-postgresql": string;
    "color-react": string;
    "color-sass": string;
    "color-spring": string;
    "color-typescript": string;
    "fade-in-grow": string;
    "fade-slide-left": string;
    "frameworks-header-color": string;
    header: string;
    introduction: string;
    "introduction-text": string;
    "languages-bg-color": string;
    "languages-wave-bottom": string;
    "languages-wave-top": string;
    list: string;
    logo: string;
    "others-bg-color": string;
    "others-header": string;
    "others-header-color": string;
    "others-section": string;
    "others-wave-top": string;
    "page-base": string;
    "page-title": string;
    "page-wave-top": string;
    wrapper: string;
  }
}

declare const HomePageModuleScssModule: HomePageModuleScssNamespace.IHomePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageModuleScssNamespace.IHomePageModuleScss;
};

export = HomePageModuleScssModule;
