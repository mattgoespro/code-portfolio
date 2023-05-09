declare namespace PageNavigatorModuleScssNamespace {
  export interface IPageNavigatorModuleScss {
    divider: string;
    "header-logo": string;
    navbar: string;
    "overflow-menu-item": string;
    "page-link": string;
    "page-link-menu-button": string;
    "page-link-menu-icon": string;
    "page-link-overflow-menu": string;
    "page-links": string;
    socials: string;
  }
}

declare const PageNavigatorModuleScssModule: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageNavigatorModuleScssNamespace.IPageNavigatorModuleScss;
};

export = PageNavigatorModuleScssModule;
