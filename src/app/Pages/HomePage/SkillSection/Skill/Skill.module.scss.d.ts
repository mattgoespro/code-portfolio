declare namespace SkillModuleScssNamespace {
  export interface ISkillModuleScss {
    "brand-icon": string;
    "experience-border-color": string;
    "fade-in-grow": string;
    "fade-slide-left": string;
    name: string;
    "name-underline": string;
    skill: string;
    "slide-in": string;
    wrapper: string;
  }
}

declare const SkillModuleScssModule: SkillModuleScssNamespace.ISkillModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SkillModuleScssNamespace.ISkillModuleScss;
};

export = SkillModuleScssModule;
