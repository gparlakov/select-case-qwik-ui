import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import { modalContextId } from "./modal-context.qwik.mjs";
const ModalTitle = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(modalContextId);
  const titleId = `${context.localId}-title`;
  return /* @__PURE__ */ _jsxS("h2", {
    id: titleId,
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "ul_0")
  }, null, 0, "ul_1");
}, "ModalTitle_component_0jZeE7lHv2k"));
export {
  ModalTitle
};
