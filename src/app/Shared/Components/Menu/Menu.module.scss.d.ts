declare namespace MenuModuleScssNamespace {
  export interface IMenuModuleScss {
    "background-color": string;
    border: string;
  }
}

declare const MenuModuleScssModule: MenuModuleScssNamespace.IMenuModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MenuModuleScssNamespace.IMenuModuleScss;
};

export = MenuModuleScssModule;
