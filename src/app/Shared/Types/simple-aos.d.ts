declare module "simple-aos" {
  // See list of available: animations https://www.npmjs.com/package/aos#-animations
  type FadeAnimation =
    | "fade"
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade-up-right"
    | "fade-up-left"
    | "fade-down-right"
    | "fade-down-left";

  type SlideAnimation = "slide-up" | "slide-down" | "slide-left" | "slide-right";

  type EasingFunction =
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "ease-in-back"
    | "ease-out-back"
    | "ease-in-out-back"
    | "ease-in-sine"
    | "ease-out-sine"
    | "ease-in-out-sine"
    | "ease-in-quad"
    | "ease-out-quad"
    | "ease-in-out-quad"
    | "ease-in-cubic"
    | "ease-out-cubic"
    | "ease-in-out-cubic"
    | "ease-in-quart"
    | "ease-out-quart"
    | "ease-in-out-quart";

  type AnchorPlacement =
    | "top-bottom"
    | "top-center"
    | "top-top"
    | "center-bottom"
    | "center-center"
    | "center-top"
    | "bottom-bottom"
    | "bottom-center"
    | "bottom-top";

  // You can also pass an optional settings object
  // below listed default settings
  interface SimpleAosOptions {
    // Global settings
    disable?: boolean; // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent?: string; // name of the event dispatched on the document, that AOS should initialize on
    initClassName?: string; // class applied after initialization
    animatedClassName?: string; // class applied on animation
    useClassNames?: boolean; // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver?: boolean; // disables automatic mutations' detections (advanced)
    debounceDelay?: number; // the delay on debounce used while resizing window (advanced)
    throttleDelay?: number; // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset?: number; // offset (in px) from the original trigger point
    delay?: number; // values from 0 to 3000, with step 50ms
    duration?: number; // values from 0 to 3000, with step 50ms
    easing?: EasingFunction; // default easing for AOS animations
    once?: boolean; // whether animation should happen only once - while scrolling down
    mirror?: boolean; // whether elements should animate out while scrolling past them
    anchorPlacement?: AnchorPlacement; // defines which position of the element regarding to window should trigger the animation
  }

  function init(options?: SimpleAosOptions): Element[];
  function refresh(initialize: boolean): void;
  function refreshHard(): void;

  export {
    SimpleAosOptions,
    init,
    refresh,
    refreshHard,
    FadeAnimation,
    AnchorPlacement,
    EasingFunction,
    SlideAnimation
  };
}
