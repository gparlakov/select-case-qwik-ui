import { componentQrl, inlinedQrl, _jsxBranch, useContext, _jsxC, Slot, _IMMUTABLE } from "@builder.io/qwik";
import { FloatingPopover } from "./floating.qwik.mjs";
import { PopoverPanelImpl } from "./popover-panel-impl.qwik.mjs";
import { popoverContextId } from "./popover-context.qwik.mjs";
const PopoverPanel = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  _jsxBranch();
  const context = useContext(popoverContextId);
  if (context.floating)
    return /* @__PURE__ */ _jsxC(FloatingPopover, {
      "data-floating": true,
      ...props,
      children: /* @__PURE__ */ _jsxC(Slot, null, 3, "tV_0"),
      [_IMMUTABLE]: {
        "data-floating": _IMMUTABLE
      }
    }, 0, "tV_1");
  return /* @__PURE__ */ _jsxC(PopoverPanelImpl, {
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "tV_2")
  }, 0, "tV_3");
}, "PopoverPanel_component_0Iy2sMTF5go"));
export {
  PopoverPanel
};
