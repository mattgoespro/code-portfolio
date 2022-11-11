declare namespace HomePageModuleScssNamespace {
  export interface IHomePageModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'brand-pink': string;
    'color-angular': string;
    'color-c-sharp': string;
    'color-dart': string;
    'color-docker': string;
    'color-flutter': string;
    'color-java': string;
    'color-node': string;
    'color-postgresql': string;
    'color-react': string;
    'color-spring': string;
    'color-typescript': string;
    'dark-blue': string;
    fadeIn: string;
    intro: string;
    other: string;
    others: string;
    'page-background': string;
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
