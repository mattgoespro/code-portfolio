declare namespace ColorsModuleScssNamespace {
  export interface IColorsModuleScss {
    blue: string;
    'dark-blue': string;
    darkgrey: string;
    grey: string;
    light: string;
    orange: string;
    pagebackground: string;
    pink: string;
    pinkdark: string;
  }
}

declare const ColorsModuleScssModule: ColorsModuleScssNamespace.IColorsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ColorsModuleScssNamespace.IColorsModuleScss;
};

export = ColorsModuleScssModule;
