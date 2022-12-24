declare namespace ProjectPageScssNamespace {
  export interface IProjectPageScss {
    banner: string;
    'banner-content': string;
    'banner-text': string;
    'project-page': string;
  }
}

declare const ProjectPageScssModule: ProjectPageScssNamespace.IProjectPageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectPageScssNamespace.IProjectPageScss;
};

export = ProjectPageScssModule;
