declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    'about-me': string;
    'about-page': string;
    banner: string;
    'banner-content': string;
    'banner-text': string;
    'character-traits': string;
    'character-traits-list': string;
    'detailed-info': string;
    name: string;
    'page-header': string;
    'page-header-wave': string;
    separator: string;
    'smellsense-link': string;
    'summary-header': string;
    'summary-text': string;
    'summary-text-heading': string;
    'summary-text-info': string;
    'uct-caption': string;
  }
}

declare const AboutPageModuleScssModule: AboutPageModuleScssNamespace.IAboutPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutPageModuleScssNamespace.IAboutPageModuleScss;
};

export = AboutPageModuleScssModule;
