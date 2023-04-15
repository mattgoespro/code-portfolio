import { anchorPlacementOptions as AnchorPlacement, easingOptions as EasingOptions } from 'aos';

// See https://www.npmjs.com/package/aos#-animations
export type FadeAnimation =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up-right'
  | 'fade-up-left'
  | 'fade-down-right'
  | 'fade-down-left';

export type SlideAnimation = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';

interface ScrollAnimationOptions {
  anchor: string;
  animation: FadeAnimation | SlideAnimation;
  animationDuration: number;
  easing?: EasingOptions;
  anchorPlacement?: AnchorPlacement;
  animationDelay?: number;
  scrollOffset?: number;
  once?: boolean;
}

export function scrollAnimateIn(options: ScrollAnimationOptions) {
  return {
    'data-aos': options.animation,
    'data-aos-duration': options.animationDuration,
    'data-aos-delay': options.animationDelay || 0,
    'data-aos-easing': options.easing || 'ease-in-out',
    'data-aos-anchor': `#${options.anchor}`,
    'data-aos-anchor-placement': options.anchorPlacement || 'center',
    'data-aos-offset': options.scrollOffset || 400,
    'data-aos-once': options.once
  };
}

// export function animateFadeIn(options: ScrollAnimationOptions) {
//   return {
//     'data-aos': 'fade',
//     'data-aos-anchor': `#${options.anchor}`,
//     'data-aos-anchor-placement': 'center',
//     'data-aos-offset': offset || 400,
//     'data-aos-duration': SECTION_TITLE_FADE_DURATION,
//     'data-aos-delay': SECTION_TITLE_FADE_DELAY
//   };
// }

// export function skillScrollIn(index: number, triggerName: string, offset?: number) {
//   return {
//     'data-aos': 'fade-left',
//     'data-aos-anchor': `#${triggerName}`,
//     'data-aos-anchor-placement': 'center',
//     'data-aos-offset': offset || 400,
//     'data-aos-duration': SECTION_TITLE_FADE_DURATION,
//     'data-aos-delay': SECTION_TITLE_FADE_DELAY + 300 + 100 * index
//   };
// }
