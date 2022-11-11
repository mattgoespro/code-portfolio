declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'content-outlet': string;
    'dark-blue': string;
    fadeIn: string;
    'nav-link-hover': string;
    'nav-text-hover-color-change': string;
    'page-background': string;
    'page-link': string;
    shell: string;
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
