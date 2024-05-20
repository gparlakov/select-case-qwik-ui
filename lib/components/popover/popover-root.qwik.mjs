import { componentQrl, inlinedQrl, useSignal, useId, useContextProvider, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import { popoverContextId } from "./popover-context.qwik.mjs";
const PopoverRoot = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const { id, "bind:anchor": givenPanelRef, floating = true, manual, hover = false, gutter, flip = true, shift, hide, arrow, ancestorScroll = true, ancestorResize = true, elementResize = true, animationFrame = false, transform, ...rest } = props;
  const rootRef = useSignal();
  const panelRef = useSignal();
  const triggerRef = useSignal();
  const arrowRef = useSignal();
  const isOpenSig = useSignal(false);
  const localId = useId();
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
  useContextProvider(popoverContextId, context);
  return /* @__PURE__ */ _jsxS("div", {
    ref: rootRef,
    id: rootId,
    ...rest,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Vp_0")
  }, null, 0, "Vp_1");
}, "PopoverRoot_component_A7Pp0eIONpE"));
export {
  PopoverRoot
};
