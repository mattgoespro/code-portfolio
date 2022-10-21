declare namespace ProjectViewModuleScssNamespace {
  export interface IProjectViewModuleScss {
    content: string;
    fadeIn: string;
    intro: string;
    name: string;
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
