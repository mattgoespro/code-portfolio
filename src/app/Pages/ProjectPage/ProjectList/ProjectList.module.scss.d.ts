declare namespace ProjectListModuleScssNamespace {
  export interface IProjectListModuleScss {
    "pinned-icon": string;
    "pinned-project-list": string;
    "pinned-project-list-title": string;
    "project-list": string;
    "project-list-title": string;
    "title-pinned": string;
    "title-unpinned": string;
    "unpinned-icon": string;
    "unpinned-project-list": string;
  }
}

declare const ProjectListModuleScssModule: ProjectListModuleScssNamespace.IProjectListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListModuleScssNamespace.IProjectListModuleScss;
};

export = ProjectListModuleScssModule;
