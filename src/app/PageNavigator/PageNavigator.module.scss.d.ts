declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    'color-blue': string;
    'color-dark-blue': string;
    'color-dark-grey': string;
    'color-extra-light': string;
    'color-grey': string;
    'color-hyperlink': string;
    'color-light': string;
    'color-orange': string;
    'color-page-background': string;
    'color-pink': string;
    'color-title': string;
    'content-outlet': string;
    'nav-link-hover': string;
    'nav-text-hover-color-change': string;
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
