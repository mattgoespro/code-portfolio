declare namespace ProjectListModuleScssNamespace {
  export interface IProjectListModuleScss {
    intro: string;
    'intro-subtitle': string;
    'intro-title': string;
    loader: string;
    'page-content': string;
    'pinned-icon': string;
    'pinned-project-list': string;
    'project-list': string;
    'title-pinned': string;
    'title-unpinned': string;
    'unpinned-icon': string;
    'unpinned-project-list': string;
    wrapper: string;
  }
}

declare const ProjectListModuleScssModule: ProjectListModuleScssNamespace.IProjectListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListModuleScssNamespace.IProjectListModuleScss;
};

export = ProjectListModuleScssModule;
