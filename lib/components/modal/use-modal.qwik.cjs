"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const focusTrap_esm = require("../../node_modules/.pnpm/focus-trap@7.5.3/node_modules/focus-trap/dist/focus-trap.esm.qwik.cjs");
const index_esm = require("../../node_modules/.pnpm/body-scroll-lock-upgrade@1.1.0/node_modules/body-scroll-lock-upgrade/lib/index.esm.qwik.cjs");
function useModal() {
  const supportClosingAnimation = /* @__PURE__ */ qwik.inlinedQrl((modal) => {
    modal.dataset.closing = "";
    modal.classList.add("modal-closing");
    const { animationDuration, transitionDuration } = getComputedStyle(modal);
    if (animationDuration !== "0s")
      modal.addEventListener("animationend", () => {
        delete modal.dataset.closing;
        modal.classList.remove("modal-closing");
        index_esm.enableBodyScroll(modal);
        modal.close();
      }, {
        once: true
      });
    if (transitionDuration !== "0s")
      modal.addEventListener("transitionend", () => {
        delete modal.dataset.closing;
        modal.classList.remove("modal-closing");
        index_esm.enableBodyScroll(modal);
        modal.close();
      }, {
        once: true
      });
    if (animationDuration === "0s" && transitionDuration === "0s") {
      delete modal.dataset.closing;
      modal.classList.remove("modal-closing");
      index_esm.enableBodyScroll(modal);
      modal.close();
    }
  }, "useModal_supportClosingAnimation_DILr70Rv1Kg");
  const trapFocus = /* @__PURE__ */ qwik.inlinedQrl((modal) => {
    return focusTrap_esm.createFocusTrap(modal, {
      escapeDeactivates: false
    });
  }, "useModal_trapFocus_g6GCjr5MEnM");
  const activateFocusTrap = /* @__PURE__ */ qwik.inlinedQrl((focusTrap) => {
    try {
      focusTrap?.activate();
    } catch {
    }
  }, "useModal_activateFocusTrap_OPEjFuMixmk");
  const deactivateFocusTrap = /* @__PURE__ */ qwik.inlinedQrl((focusTrap) => {
    focusTrap?.deactivate();
    focusTrap = null;
  }, "useModal_deactivateFocusTrap_oc9TYSf2E1Y");
  const showModal = /* @__PURE__ */ qwik.inlinedQrl(async (modal) => {
    index_esm.disableBodyScroll(modal, {
      reserveScrollBarGap: true
    });
    modal.showModal();
  }, "useModal_showModal_i9RoI5rzXzQ");
  const closeModal = /* @__PURE__ */ qwik.inlinedQrl(async (modal) => {
    const [supportClosingAnimation2] = qwik.useLexicalScope();
    await supportClosingAnimation2(modal);
  }, "useModal_closeModal_PcN6x5CBggI", [
    supportClosingAnimation
  ]);
  const wasModalBackdropClicked = /* @__PURE__ */ qwik.inlinedQrl((modal, clickEvent) => {
    if (!modal)
      return false;
    const rect = modal.getBoundingClientRect();
    const wasBackdropClicked = rect.left > clickEvent.clientX || rect.right < clickEvent.clientX || rect.top > clickEvent.clientY || rect.bottom < clickEvent.clientY;
    return clickEvent.pointerId === -1 ? false : wasBackdropClicked;
  }, "useModal_wasModalBackdropClicked_WeuHM6Ybk1w");
  return {
    trapFocus,
    activateFocusTrap,
    deactivateFocusTrap,
    showModal,
    closeModal,
    wasModalBackdropClicked,
    supportClosingAnimation
  };
}
exports.useModal = useModal;
