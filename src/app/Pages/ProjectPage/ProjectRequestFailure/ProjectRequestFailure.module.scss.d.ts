declare namespace ProjectRequestFailureModuleScssNamespace {
  export interface IProjectRequestFailureModuleScss {
    error: string;
    "failure-img": string;
    msg: string;
    oops: string;
    "try-later": string;
    wrapper: string;
  }
}

declare const ProjectRequestFailureModuleScssModule: ProjectRequestFailureModuleScssNamespace.IProjectRequestFailureModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectRequestFailureModuleScssNamespace.IProjectRequestFailureModuleScss;
};

export = ProjectRequestFailureModuleScssModule;
