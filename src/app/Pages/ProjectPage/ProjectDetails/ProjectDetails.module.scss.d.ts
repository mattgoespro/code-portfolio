declare namespace ProjectDetailsModuleScssNamespace {
  export interface IProjectDetailsModuleScss {
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
