declare namespace ProjectListModuleScssNamespace {
  export interface IProjectListModuleScss {
    "aos-init": string;
    fadeIn: string;
    pinned: string;
    "project-card": string;
    "project-card-placeholder": string;
    "project-list": string;
    "project-list-title": string;
    "project-load-error": string;
    shimmer: string;
    slideInOut: string;
    wrapper: string;
  }
}

declare const ProjectListModuleScssModule: ProjectListModuleScssNamespace.IProjectListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListModuleScssNamespace.IProjectListModuleScss;
};

export = ProjectListModuleScssModule;
