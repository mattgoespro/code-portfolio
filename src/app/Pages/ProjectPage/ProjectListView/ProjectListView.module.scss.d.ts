declare namespace ProjectListViewModuleScssNamespace {
  export interface IProjectListViewModuleScss {
    blue: string;
    darkBlue: string;
    darkGrey: string;
    fadeIn: string;
    grey: string;
    intro: string;
    'intro-subtitle': string;
    'intro-title': string;
    light: string;
    'list-divider': string;
    loader: string;
    'page-content': string;
    pageBackground: string;
    'project-list': string;
    wrapper: string;
  }
}

declare const ProjectListViewModuleScssModule: ProjectListViewModuleScssNamespace.IProjectListViewModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListViewModuleScssNamespace.IProjectListViewModuleScss;
};

export = ProjectListViewModuleScssModule;
