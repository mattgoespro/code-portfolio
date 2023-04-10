declare namespace ProjectDetailsModuleScssNamespace {
  export interface IProjectDetailsModuleScss {
    'language-card': string;
    'project-name': string;
    'readme-unavailable': string;
    stats: string;
    'stats-card': string;
    wrapper: string;
  }
}

declare const ProjectDetailsModuleScssModule: ProjectDetailsModuleScssNamespace.IProjectDetailsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectDetailsModuleScssNamespace.IProjectDetailsModuleScss;
};

export = ProjectDetailsModuleScssModule;
