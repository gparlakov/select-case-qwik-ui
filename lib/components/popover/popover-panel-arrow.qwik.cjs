"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const popoverContext = require("./popover-context.qwik.cjs");
const PopoverPanelArrow = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(popoverContext.popoverContextId);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref: context.arrowRef,
    get style() {
      return {
        position: "absolute",
        background: "red"
      };
    },
    ...props
  }, {
    style: {
      position: "absolute",
      background: "red"
    }
  }, 0, "BD_0");
}, "PopoverPanelArrow_component_ThDEZ0BwjRg"));
exports.PopoverPanelArrow = PopoverPanelArrow;
