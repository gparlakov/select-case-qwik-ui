import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
const ComboboxLabel = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(ComboboxContextId);
  const inputId = `${context.localId}-input`;
  return /* @__PURE__ */ _jsxS("label", {
    ...props,
    for: inputId,
    ref: context.labelRef,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "n0_0")
  }, null, 0, "n0_1");
}, "ComboboxLabel_component_dcO07wshi04"));
export {
  ComboboxLabel
};
