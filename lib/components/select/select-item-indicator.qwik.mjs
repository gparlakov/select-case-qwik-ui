import { componentQrl, inlinedQrl, _jsxBranch, useContext, _jsxC, Slot } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
import { selectItemContextId } from "./select-context.qwik.mjs";
const SelectItemIndicator = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  _jsxBranch();
  const selectContext = useContext(selectItemContextId);
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: selectContext.isSelectedSig.value && /* @__PURE__ */ _jsxC(Slot, null, 3, "4z_0")
  }, 1, "4z_1");
}, "SelectItemIndicator_component_HzeK1aYFPJk"));
export {
  SelectItemIndicator
};
