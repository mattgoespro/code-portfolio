declare namespace ProjectPageLoadErrorModuleScssNamespace {
  export interface IProjectPageLoadErrorModuleScss {
    blue: string;
    'dark-blue': string;
    darkgrey: string;
    'err-msg': string;
    'err-msg-try-later': string;
    error: string;
    grey: string;
    light: string;
    orange: string;
    pagebackground: string;
    pink: string;
    pinkdark: string;
    wrapper: string;
  }
}

declare const ProjectPageLoadErrorModuleScssModule: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss;
};

export = ProjectPageLoadErrorModuleScssModule;
