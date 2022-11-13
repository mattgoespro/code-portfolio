declare namespace ProjectDetailsModuleScssNamespace {
  export interface IProjectDetailsModuleScss {
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
    content: string;
    'content-section': string;
    info: string;
    intro: string;
    name: string;
    readme: string;
    'readme-unavailable': string;
    wrapper: string;
  }
}

declare const ProjectDetailsModuleScssModule: ProjectDetailsModuleScssNamespace.IProjectDetailsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectDetailsModuleScssNamespace.IProjectDetailsModuleScss;
};

export = ProjectDetailsModuleScssModule;
