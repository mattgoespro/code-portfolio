declare namespace ProjectListItemModuleScssNamespace {
  export interface IProjectListItemModuleScss {
    actions: string;
    'btn-action': string;
    'btn-action-view-details': string;
    card: string;
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
    description: string;
    'description-wrapper': string;
    fadeIn: string;
    'github-link': string;
    header: string;
    pinned: string;
    'project-name': string;
  }
}

declare const ProjectListItemModuleScssModule: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss;
};

export = ProjectListItemModuleScssModule;
