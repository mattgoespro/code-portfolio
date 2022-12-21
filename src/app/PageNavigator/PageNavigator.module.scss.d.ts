declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    'page-link': string;
    'page-link-item': string;
    'side-nav': string;
    'side-nav-logo': string;
    'side-nav-page-links': string;
    'side-nav-section-divider': string;
    'social-icon': string;
    'social-icon-link': string;
    'social-icons': string;
  }
}

declare const PageNavigatorModuleScssModule: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss;
};

export = PageNavigatorModuleScssModule;
