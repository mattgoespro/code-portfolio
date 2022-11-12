declare namespace ProjectListViewModuleScssNamespace {
  export interface IProjectListViewModuleScss {
    'color-blue': string;
    'color-dark-blue': string;
    'color-dark-grey': string;
    'color-extra-light': string;
    'color-grey': string;
    'color-hyperlink': string;
    'color-light': string;
    'color-orange': string;
    'color-page-background': string;
    'color-title': string;
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

declare const ProjectListViewModuleScssModule: ProjectListViewModuleScssNamespace.IProjectListViewModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListViewModuleScssNamespace.IProjectListViewModuleScss;
};

export = ProjectListViewModuleScssModule;
