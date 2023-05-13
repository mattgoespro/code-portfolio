declare namespace ProjectDetailsModuleScssNamespace {
  export interface IProjectDetailsModuleScss {
    divider: string;
    "header-title": string;
    languages: string;
    "page-header": string;
    "project-details": string;
    "project-details-page": string;
    "project-readme": string;
    "readme-unavailable": string;
    repository: string;
    stats: string;
  }
}

declare const ProjectDetailsModuleScssModule: ProjectDetailsModuleScssNamespace.IProjectDetailsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectDetailsModuleScssNamespace.IProjectDetailsModuleScss;
};

export = ProjectDetailsModuleScssModule;
