declare namespace PageBannerModuleScssNamespace {
  export interface IPageBannerModuleScss {
    banner: string;
    subtitle: string;
    title: string;
    'title-wrapper': string;
  }
}

declare const PageBannerModuleScssModule: PageBannerModuleScssNamespace.IPageBannerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageBannerModuleScssNamespace.IPageBannerModuleScss;
};

export = PageBannerModuleScssModule;
