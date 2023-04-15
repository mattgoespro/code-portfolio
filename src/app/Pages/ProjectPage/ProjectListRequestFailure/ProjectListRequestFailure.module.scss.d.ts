declare namespace ProjectListRequestFailureModuleScssNamespace {
  export interface IProjectListRequestFailureModuleScss {
    "err-msg": string;
    "err-msg-try-later": string;
    error: string;
    wrapper: string;
  }
}

declare const ProjectListRequestFailureModuleScssModule: ProjectListRequestFailureModuleScssNamespace.IProjectListRequestFailureModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListRequestFailureModuleScssNamespace.IProjectListRequestFailureModuleScss;
};

export = ProjectListRequestFailureModuleScssModule;
