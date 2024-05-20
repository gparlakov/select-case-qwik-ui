"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const floating = require("./floating.qwik.cjs");
const popoverPanelImpl = require("./popover-panel-impl.qwik.cjs");
const popoverContext = require("./popover-context.qwik.cjs");
const PopoverPanel = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const context = qwik.useContext(popoverContext.popoverContextId);
  if (context.floating)
    return /* @__PURE__ */ qwik._jsxC(floating.FloatingPopover, {
      "data-floating": true,
      ...props,
      children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "tV_0"),
      [qwik._IMMUTABLE]: {
        "data-floating": qwik._IMMUTABLE
      }
    }, 0, "tV_1");
  return /* @__PURE__ */ qwik._jsxC(popoverPanelImpl.PopoverPanelImpl, {
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "tV_2")
  }, 0, "tV_3");
}, "PopoverPanel_component_0Iy2sMTF5go"));
exports.PopoverPanel = PopoverPanel;
