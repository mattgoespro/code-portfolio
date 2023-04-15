import { scrollAnimateIn } from '@shared/utility/AnimateOnScroll';

export const SKILL_TITLE_ANIMATE_DELAY = 100;
export const SKILL_TITLE_ANIMATE_DURATION = 400;
export const SKILL_CONTENT_ANIMATE_LAG = 400;
export const SKILL_CONTENT_ANIMATE_SPEED = 100;

export function skillTitleScrollFade(anchor: string, scrollOffset?: number) {
  return scrollAnimateIn({
    anchor,
    animation: 'fade-left',
    animationDuration: SKILL_TITLE_ANIMATE_DURATION,
    animationDelay: SKILL_TITLE_ANIMATE_DELAY,
    scrollOffset: scrollOffset || 400,
    once: true
  });
}

export function skillListItemScrollFade(itemIndex: number, anchor: string) {
  return scrollAnimateIn({
    anchor,
    animation: 'fade-left',
    animationDuration: SKILL_TITLE_ANIMATE_DURATION,
    easing: 'ease',
    animationDelay:
      SKILL_TITLE_ANIMATE_DELAY +
      SKILL_CONTENT_ANIMATE_LAG +
      SKILL_CONTENT_ANIMATE_SPEED * itemIndex,
    once: true
  });
}
