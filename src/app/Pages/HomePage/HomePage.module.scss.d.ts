declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    'color-angular': string;
    'color-blue': string;
    'color-c-sharp': string;
    'color-dark-blue': string;
    'color-dark-grey': string;
    'color-dart': string;
    'color-docker': string;
    'color-extra-light': string;
    'color-flutter': string;
    'color-grey': string;
    'color-hyperlink': string;
    'color-java': string;
    'color-light': string;
    'color-node': string;
    'color-orange': string;
    'color-page-background': string;
    'color-postgresql': string;
    'color-react': string;
    'color-spring': string;
    'color-title': string;
    'color-typescript': string;
    fadeIn: string;
    intro: string;
    other: string;
    others: string;
    'page-content': string;
    'skill-card': string;
    'skill-name': string;
    'skill-section': string;
    'skill-set-wrapper': string;
    'skill-sets': string;
    'skill-title': string;
    'skill-title-divider': string;
    'title-angular': string;
    'title-c-sharp': string;
    'title-dart': string;
    'title-docker': string;
    'title-flutter': string;
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
