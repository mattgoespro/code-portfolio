declare namespace ProjectPageLoadErrorModuleScssNamespace {
  export interface IProjectPageLoadErrorModuleScss {
    'err-msg': string;
    'err-msg-try-later': string;
    error: string;
    wrapper: string;
  }
}

declare const ProjectPageLoadErrorModuleScssModule: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectPageLoadErrorModuleScssNamespace.IProjectPageLoadErrorModuleScss;
};

export = ProjectPageLoadErrorModuleScssModule;
