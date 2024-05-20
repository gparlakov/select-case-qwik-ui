"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const popoverContext = require("./popover-context.qwik.cjs");
const PopoverRoot = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const { id, "bind:anchor": givenPanelRef, floating = true, manual, hover = false, gutter, flip = true, shift, hide, arrow, ancestorScroll = true, ancestorResize = true, elementResize = true, animationFrame = false, transform, ...rest } = props;
  const rootRef = qwik.useSignal();
  const panelRef = qwik.useSignal();
  const triggerRef = qwik.useSignal();
  const arrowRef = qwik.useSignal();
  const isOpenSig = qwik.useSignal(false);
  const localId = qwik.useId();
  const compId = id ?? localId;
  const rootId = `${compId}-root`;
  const context = {
    anchorRef: givenPanelRef,
    compId,
    floating,
    hover,
    panelRef,
    triggerRef,
    arrowRef,
    isOpenSig,
    localId,
    manual,
    arrow,
    gutter,
    flip,
    shift,
    hide,
    ancestorScroll,
    ancestorResize,
    elementResize,
    animationFrame,
    transform
  };
  qwik.useContextProvider(popoverContext.popoverContextId, context);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref: rootRef,
    id: rootId,
    ...rest,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Vp_0")
  }, null, 0, "Vp_1");
}, "PopoverRoot_component_A7Pp0eIONpE"));
exports.PopoverRoot = PopoverRoot;
