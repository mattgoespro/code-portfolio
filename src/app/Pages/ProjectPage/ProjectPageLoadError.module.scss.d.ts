declare namespace ProjectPageLoadErrorModuleScssNamespace {
  export interface IProjectPageLoadErrorModuleScss {
    blue: string;
    darkBlue: string;
    darkGrey: string;
    'err-msg': string;
    'err-msg-try-later': string;
    error: string;
    grey: string;
    light: string;
    pageBackground: string;
    wrapper: string;
  }
}

declare const ProjectPageLoadErrorModuleScssModule: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss;
};

export = ProjectPageLoadErrorModuleScssModule;
