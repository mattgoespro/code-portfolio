declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    blue: string;
    'content-outlet': string;
    'dark-blue': string;
    darkgrey: string;
    fadeIn: string;
    grey: string;
    light: string;
    'nav-link-hover': string;
    'nav-text-hover-color-change': string;
    orange: string;
    'page-link': string;
    pagebackground: string;
    pink: string;
    pinkdark: string;
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
