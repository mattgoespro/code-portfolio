declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    divider: string;
    'header-logo': string;
    'page-links': string;
    'side-nav': string;
    socials: string;
  }
}

declare const PageNavigatorModuleScssModule: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss;
};

export = PageNavigatorModuleScssModule;
