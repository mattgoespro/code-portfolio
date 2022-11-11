declare namespace ProjectListItemModuleScssNamespace {
  export interface IProjectListItemModuleScss {
    blue: string;
    'btn-nav-link': string;
    card: string;
    'dark-blue': string;
    darkgrey: string;
    description: string;
    'description-wrapper': string;
    fadeIn: string;
    grey: string;
    light: string;
    'lnk-view-details': string;
    name: string;
    'nav-links': string;
    orange: string;
    pagebackground: string;
    pink: string;
    pinkdark: string;
    pinned: string;
    title: string;
  }
}

declare const ProjectListItemModuleScssModule: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectListItemModuleScssNamespace.IProjectListItemModuleScss;
};

export = ProjectListItemModuleScssModule;
