declare namespace SkillSectionModuleScssNamespace {
  export interface ISkillSectionModuleScss {
    header: string;
    list: string;
    wrapper: string;
  }
}

declare const SkillSectionModuleScssModule: SkillSectionModuleScssNamespace.ISkillSectionModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkillSectionModuleScssNamespace.ISkillSectionModuleScss;
};

export = SkillSectionModuleScssModule;
