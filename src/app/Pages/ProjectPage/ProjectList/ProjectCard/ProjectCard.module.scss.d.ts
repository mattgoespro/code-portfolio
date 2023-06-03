declare namespace ProjectCardModuleScssNamespace {
  export interface IProjectCardModuleScss {
    "btn-action": string;
    "btn-action-view-details": string;
    description: string;
    "not-available": string;
    pinned: string;
    "project-name": string;
    title: string;
    wrapper: string;
  }
}

declare const ProjectCardModuleScssModule: ProjectCardModuleScssNamespace.IProjectCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectCardModuleScssNamespace.IProjectCardModuleScss;
};

export = ProjectCardModuleScssModule;
