declare namespace ProjectListItemModuleScssNamespace {
  export interface IProjectListItemModuleScss {
    actions: string;
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'btn-action': string;
    'btn-action-view-details': string;
    card: string;
    'dark-blue': string;
    description: string;
    'description-wrapper': string;
    fadeIn: string;
    'github-link': string;
    header: string;
    'page-background': string;
    pinned: string;
    'project-name': string;
  }
}

declare const ProjectListItemModuleScssModule: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss;
};

export = ProjectListItemModuleScssModule;
