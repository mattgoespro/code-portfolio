declare namespace AboutPageModuleScssNamespace {
  export interface IAboutPageModuleScss {
    'content-wrapper': string;
    'img-profile': string;
    'profile-image': string;
    'text-content': string;
    wrapper: string;
  }
}

declare const AboutPageModuleScssModule: AboutPageModuleScssNamespace.IAboutPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutPageModuleScssNamespace.IAboutPageModuleScss;
};

export = AboutPageModuleScssModule;
