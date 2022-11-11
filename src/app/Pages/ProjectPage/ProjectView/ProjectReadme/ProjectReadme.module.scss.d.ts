declare namespace ProjectReadmeModuleScssNamespace {
  export interface IProjectReadmeModuleScss {
    blue: string;
    'dark-blue': string;
    darkgrey: string;
    fadeIn: string;
    grey: string;
    light: string;
    orange: string;
    pagebackground: string;
    pink: string;
    pinkdark: string;
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
