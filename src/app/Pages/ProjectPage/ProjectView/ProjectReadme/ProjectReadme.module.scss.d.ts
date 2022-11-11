declare namespace ProjectReadmeModuleScssNamespace {
  export interface IProjectReadmeModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    'dark-blue': string;
    fadeIn: string;
    'page-background': string;
    'section-content': string;
    'section-subtitle': string;
    'section-title': string;
    title: string;
  }
}

declare const ProjectReadmeModuleScssModule: ProjectReadmeModuleScssNamespace.IProjectReadmeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectReadmeModuleScssNamespace.IProjectReadmeModuleScss;
};

export = ProjectReadmeModuleScssModule;
