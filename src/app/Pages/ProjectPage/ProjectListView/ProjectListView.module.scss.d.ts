declare namespace ProjectListViewModuleScssNamespace {
  export interface IProjectListViewModuleScss {
    blue: string;
    'dark-blue': string;
    darkgrey: string;
    fadeIn: string;
    grey: string;
    intro: string;
    'intro-subtitle': string;
    'intro-title': string;
    light: string;
    loader: string;
    orange: string;
    'page-content': string;
    pagebackground: string;
    pink: string;
    pinkdark: string;
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
