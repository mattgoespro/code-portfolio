declare namespace ProjectViewModuleScssNamespace {
  export interface IProjectViewModuleScss {
    blue: string;
    content: string;
    'content-section': string;
    darkBlue: string;
    darkGrey: string;
    fadeIn: string;
    grey: string;
    info: string;
    intro: string;
    light: string;
    name: string;
    pageBackground: string;
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
