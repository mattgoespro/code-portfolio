declare namespace ColorsModuleScssNamespace {
  export interface IColorsModuleScss {
    blue: string;
    darkBlue: string;
    darkGrey: string;
    grey: string;
    light: string;
    pageBackground: string;
  }
}

declare const ColorsModuleScssModule: ColorsModuleScssNamespace.IColorsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ColorsModuleScssNamespace.IColorsModuleScss;
};

export = ColorsModuleScssModule;
