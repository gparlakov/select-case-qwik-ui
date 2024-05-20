"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const modalContext = require("./modal-context.qwik.cjs");
const ModalDescription = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(modalContext.modalContextId);
  const descriptionId = `${context.localId}-description`;
  return /* @__PURE__ */ qwik._jsxS("p", {
    id: descriptionId,
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "zy_0")
  }, null, 0, "zy_1");
}, "ModalDescription_component_Zg8zwVvxwLM"));
exports.ModalDescription = ModalDescription;
