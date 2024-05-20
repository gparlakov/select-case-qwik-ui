"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function supportShowAnimation(popover, isPolyfill) {
  const { transitionDuration } = getComputedStyle(popover);
  if (isPolyfill) {
    if (transitionDuration !== "0s")
      setTimeout(() => {
        popover.classList.add("popover-showing");
        popover.classList.remove("popover-closing");
      }, 10);
    else {
      popover.classList.add("popover-showing");
      popover.classList.remove("popover-closing");
    }
  } else if (transitionDuration !== "0s")
    setTimeout(() => {
      popover.classList.add("popover-showing");
      popover.classList.remove("popover-closing");
    }, 5);
  else {
    popover.classList.add("popover-showing");
    popover.classList.remove("popover-closing");
  }
}
function supportClosingAnimation(popover) {
  popover.classList.remove("popover-showing");
  popover.classList.add("popover-closing");
  const { animationDuration, transitionDuration } = getComputedStyle(popover);
  const runAnimationEnd = () => {
    popover.classList.remove("popover-closing");
  };
  const runTransitionEnd = () => {
    popover.classList.remove("popover-closing");
  };
  if (animationDuration !== "0s")
    popover.addEventListener("animationend", runAnimationEnd, {
      once: true
    });
  else if (transitionDuration !== "0s")
    popover.addEventListener("transitionend", runTransitionEnd, {
      once: true
    });
  else
    popover.classList.remove("popover-closing");
}
exports.supportClosingAnimation = supportClosingAnimation;
exports.supportShowAnimation = supportShowAnimation;
