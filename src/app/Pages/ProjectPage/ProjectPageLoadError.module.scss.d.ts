declare namespace ProjectPageLoadErrorModuleScssNamespace {
  export interface IProjectPageLoadErrorModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'dark-blue': string;
    'err-msg': string;
    'err-msg-try-later': string;
    error: string;
    'page-background': string;
    wrapper: string;
  }
}

declare const ProjectPageLoadErrorModuleScssModule: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss;
};

export = ProjectPageLoadErrorModuleScssModule;
