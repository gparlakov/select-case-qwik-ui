/**
 * Adds CSS-Class to support popover-opening-animation
 */
export declare function supportShowAnimation(popover: HTMLElement, isPolyfill: boolean): void;
/**
 * Listens for animation/transition events in order to
 * remove Animation-CSS-Classes after animation/transition ended.
 * export function supportClosingAnimation(popover: HTMLElement, afterAnimate: () => void) {
 */
export declare function supportClosingAnimation(popover: HTMLElement): void;
