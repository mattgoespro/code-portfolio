declare namespace ProjectRepositoryStatsModuleScssNamespace {
  export interface IProjectRepositoryStatsModuleScss {
    stat: string;
    stats: string;
    wrapper: string;
  }
}

declare const ProjectRepositoryStatsModuleScssModule: ProjectRepositoryStatsModuleScssNamespace.IProjectRepositoryStatsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectRepositoryStatsModuleScssNamespace.IProjectRepositoryStatsModuleScss;
};

export = ProjectRepositoryStatsModuleScssModule;
