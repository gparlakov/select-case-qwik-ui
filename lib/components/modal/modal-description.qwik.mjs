import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import { modalContextId } from "./modal-context.qwik.mjs";
const ModalDescription = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(modalContextId);
  const descriptionId = `${context.localId}-description`;
  return /* @__PURE__ */ _jsxS("p", {
    id: descriptionId,
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "zy_0")
  }, null, 0, "zy_1");
}, "ModalDescription_component_Zg8zwVvxwLM"));
export {
  ModalDescription
};
