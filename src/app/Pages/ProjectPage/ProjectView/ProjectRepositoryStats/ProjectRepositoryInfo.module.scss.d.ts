declare namespace ProjectRepositoryInfoModuleScssNamespace {
  export interface IProjectRepositoryInfoModuleScss {
    activity: string;
    'activity-title': string;
    content: string;
    wrapper: string;
  }
}

declare const ProjectRepositoryInfoModuleScssModule: ProjectRepositoryInfoModuleScssNamespace.IProjectRepositoryInfoModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectRepositoryInfoModuleScssNamespace.IProjectRepositoryInfoModuleScss;
};

export = ProjectRepositoryInfoModuleScssModule;
