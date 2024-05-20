"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const modalContext = require("./modal-context.qwik.cjs");
const ModalTitle = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(modalContext.modalContextId);
  const titleId = `${context.localId}-title`;
  return /* @__PURE__ */ qwik._jsxS("h2", {
    id: titleId,
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "ul_0")
  }, null, 0, "ul_1");
}, "ModalTitle_component_0jZeE7lHv2k"));
exports.ModalTitle = ModalTitle;
