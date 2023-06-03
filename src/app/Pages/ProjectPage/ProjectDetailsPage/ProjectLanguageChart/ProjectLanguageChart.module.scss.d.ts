declare namespace ProjectLanguageChartModuleScssNamespace {
  export interface IProjectLanguageChartModuleScss {
    container: string;
    "no-languages-container": string;
    "pie-chart-container": string;
  }
}

declare const ProjectLanguageChartModuleScssModule: ProjectLanguageChartModuleScssNamespace.IProjectLanguageChartModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectLanguageChartModuleScssNamespace.IProjectLanguageChartModuleScss;
};

export = ProjectLanguageChartModuleScssModule;
