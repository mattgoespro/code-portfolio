declare namespace ProjectViewModuleScssNamespace {
  export interface IProjectViewModuleScss {
    'brand-blue': string;
    'brand-dark-grey': string;
    'brand-extra-light': string;
    'brand-grey': string;
    'brand-light': string;
    'brand-orange': string;
    content: string;
    'content-section': string;
    'dark-blue': string;
    fadeIn: string;
    info: string;
    intro: string;
    name: string;
    'page-background': string;
    readme: string;
    'readme-unavailable': string;
    wrapper: string;
  }
}

declare const ProjectViewModuleScssModule: ProjectViewModuleScssNamespace.IProjectViewModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectViewModuleScssNamespace.IProjectViewModuleScss;
};

export = ProjectViewModuleScssModule;
