declare namespace ProjectListItemModuleScssNamespace {
  export interface IProjectListItemModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'btn-nav-link': string;
    card: string;
    'dark-blue': string;
    description: string;
    'description-wrapper': string;
    fadeIn: string;
    'lnk-view-details': string;
    name: string;
    'nav-links': string;
    'page-background': string;
    pinned: string;
    title: string;
  }
}

declare const ProjectListItemModuleScssModule: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss;
};

export = ProjectListItemModuleScssModule;
