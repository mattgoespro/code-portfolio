declare namespace SkillModuleScssNamespace {
  export interface ISkillModuleScss {
    "brand-icon": string;
    "experience-border-color": string;
    "icon-large": string;
    "icon-regular": string;
    name: string;
    "name-underline": string;
    padded: string;
    "regular-border-color": string;
    skill: string;
    wrapper: string;
  }
}

declare const SkillModuleScssModule: SkillModuleScssNamespace.ISkillModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkillModuleScssNamespace.ISkillModuleScss;
};

export = SkillModuleScssModule;
