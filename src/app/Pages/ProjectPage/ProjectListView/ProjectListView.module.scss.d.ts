declare namespace ProjectListViewModuleScssNamespace {
  export interface IProjectListViewModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'dark-blue': string;
    fadeIn: string;
    intro: string;
    'intro-subtitle': string;
    'intro-title': string;
    loader: string;
    'page-background': string;
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

declare const ProjectListViewModuleScssModule: ProjectListViewModuleScssNamespace.IProjectListViewModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListViewModuleScssNamespace.IProjectListViewModuleScss;
};

export = ProjectListViewModuleScssModule;
