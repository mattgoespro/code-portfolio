declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    'content-outlet': string;
    fadeIn: string;
    'nav-icon-cv-download': string;
    'nav-icon-github': string;
    'nav-icon-linkedin': string;
    'nav-left': string;
    'nav-link': string;
    'nav-link-hover': string;
    'nav-link-social': string;
    'nav-social-icons': string;
    shell: string;
  }
}

declare const PageNavigatorModuleScssModule: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss;
};

export = PageNavigatorModuleScssModule;
