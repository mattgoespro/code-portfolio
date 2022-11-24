declare namespace ProjectListRequestFailureModuleScssNamespace {
  export interface IProjectListRequestFailureModuleScss {
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
    'err-msg': string;
    'err-msg-try-later': string;
    error: string;
    wrapper: string;
  }
}

declare const ProjectListRequestFailureModuleScssModule: ProjectListRequestFailureModuleScssNamespace.IProjectListRequestFailureModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListRequestFailureModuleScssNamespace.IProjectListRequestFailureModuleScss;
};

export = ProjectListRequestFailureModuleScssModule;
