declare namespace ProjectListItemModuleScssNamespace {
  export interface IProjectListItemModuleScss {
    'btn-nav-link': string;
    card: string;
    description: string;
    'description-wrapper': string;
    fadeIn: string;
    'lnk-view-details': string;
    name: string;
    'nav-links': string;
    pinned: string;
    title: string;
  }
}

declare const ProjectListItemModuleScssModule: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss;
};

export = ProjectListItemModuleScssModule;
