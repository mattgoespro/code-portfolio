declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    "about-content": string;
    "about-page": string;
    character: string;
    "character-trait": string;
    "character-traits": string;
    "content-summary": string;
    "content-summary-description": string;
    "content-summary-header": string;
    "content-summary-title": string;
    "detailed-info": string;
    name: string;
    "page-header": string;
    "page-header-wave-bottom": string;
    "page-header-wave-top": string;
    "profile-img": string;
    separator: string;
    "smellsense-link": string;
    "uct-caption": string;
  }
}

declare const AboutPageModuleScssModule: AboutPageModuleScssNamespace.IAboutPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutPageModuleScssNamespace.IAboutPageModuleScss;
};

export = AboutPageModuleScssModule;
