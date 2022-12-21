declare namespace ProjectCardModuleScssNamespace {
  export interface IProjectCardModuleScss {
    actions: string;
    'btn-action': string;
    'btn-action-view-details': string;
    card: string;
    description: string;
    'description-wrapper': string;
    'github-link': string;
    header: string;
    pinned: string;
    'project-name': string;
  }
}

declare const ProjectCardModuleScssModule: ProjectCardModuleScssNamespace.IProjectCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectCardModuleScssNamespace.IProjectCardModuleScss;
};

export = ProjectCardModuleScssModule;
