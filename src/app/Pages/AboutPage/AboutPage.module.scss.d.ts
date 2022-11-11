declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    blue: string;
    content: string;
    darkBlue: string;
    darkGrey: string;
    fadeIn: string;
    grey: string;
    header: string;
    'img-profile': string;
    light: string;
    pageBackground: string;
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
