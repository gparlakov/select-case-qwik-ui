import { componentQrl, inlinedQrl, useContext, _jsxS } from "@builder.io/qwik";
import { popoverContextId } from "./popover-context.qwik.mjs";
const PopoverPanelArrow = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(popoverContextId);
  return /* @__PURE__ */ _jsxS("div", {
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
export {
  PopoverPanelArrow
};
