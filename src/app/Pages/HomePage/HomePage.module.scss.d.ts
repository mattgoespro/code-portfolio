declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    blue: string;
    'color-angular': string;
    'color-c-sharp': string;
    'color-java': string;
    'color-node': string;
    'color-postgresql': string;
    'color-react': string;
    'color-spring': string;
    'color-typescript': string;
    darkBlue: string;
    darkGrey: string;
    fadeIn: string;
    grey: string;
    intro: string;
    light: string;
    other: string;
    others: string;
    'page-content': string;
    pageBackground: string;
    'skill-card': string;
    'skill-name': string;
    'skill-section': string;
    'skill-set-wrapper': string;
    'skill-sets': string;
    'skill-title': string;
    'skill-title-divider': string;
    'title-angular': string;
    'title-c-sharp': string;
    'title-java': string;
    'title-node': string;
    'title-postgresql': string;
    'title-react': string;
    'title-spring': string;
    'title-typescript': string;
    wrapper: string;
  }
}

declare const HomePageModuleScssModule: HomePageModuleScssNamespace.IHomePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageModuleScssNamespace.IHomePageModuleScss;
};

export = HomePageModuleScssModule;
