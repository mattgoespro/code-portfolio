declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    'color-blue': string;
    'color-dark-blue': string;
    'color-dark-grey': string;
    'color-extra-light': string;
    'color-grey': string;
    'color-hyperlink': string;
    'color-light': string;
    'color-orange': string;
    'color-page-background': string;
    'color-title': string;
    content: string;
    fadeIn: string;
    header: string;
    'img-profile': string;
    separator: string;
    'smellsense-link': string;
    'subtitle-personality': string;
    'subtitle-profession': string;
    title: string;
    'title-header': string;
    wrapper: string;
  }
}

declare const AboutPageModuleScssModule: AboutPageModuleScssNamespace.IAboutPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutPageModuleScssNamespace.IAboutPageModuleScss;
};

export = AboutPageModuleScssModule;
