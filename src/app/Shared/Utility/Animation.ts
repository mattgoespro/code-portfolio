import { AnchorPlacement, EasingFunction, FadeAnimation, SlideAnimation } from "simple-aos";

interface ScrollAnimationOptions {
  anchor: string;
  animation: FadeAnimation | SlideAnimation;
  animationDuration: number;
  easing?: EasingFunction;
  anchorPlacement?: AnchorPlacement;
  animationDelay?: number;
  scrollOffset?: number;
  once?: boolean;
}

export function createAnimateOnScrollAttribs(options: ScrollAnimationOptions) {
  return {
    "data-aos": options.animation,
    "data-aos-duration": options.animationDuration,
    "data-aos-delay": options.animationDelay || 0,
    "data-aos-easing": options.easing || "ease-in-out",
    "data-aos-anchor": `#${options.anchor}`,
    "data-aos-anchor-placement": options.anchorPlacement || "center",
    "data-aos-offset": options.scrollOffset || 400,
    "data-aos-once": options.once
  };
}
