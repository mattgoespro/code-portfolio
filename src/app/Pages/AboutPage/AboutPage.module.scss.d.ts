declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    about: string;
    'about-me': string;
    'about-page': string;
    banner: string;
    'banner-content': string;
    'banner-text': string;
    'character-traits': string;
    'detailed-info': string;
    head: string;
    name: string;
    separator: string;
    'smellsense-link': string;
    'summary-header': string;
    'summary-text': string;
  }
}

declare const AboutPageModuleScssModule: AboutPageModuleScssNamespace.IAboutPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutPageModuleScssNamespace.IAboutPageModuleScss;
};

export = AboutPageModuleScssModule;
