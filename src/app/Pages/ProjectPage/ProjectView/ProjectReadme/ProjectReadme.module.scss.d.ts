declare namespace ProjectReadmeModuleScssNamespace {
  export interface IProjectReadmeModuleScss {
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
