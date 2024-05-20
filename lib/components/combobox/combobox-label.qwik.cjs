"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const ComboboxLabel = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(comboboxContextId);
  const inputId = `${context.localId}-input`;
  return /* @__PURE__ */ qwik._jsxS("label", {
    ...props,
    for: inputId,
    ref: context.labelRef,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "n0_0")
  }, null, 0, "n0_1");
}, "ComboboxLabel_component_dcO07wshi04"));
exports.ComboboxLabel = ComboboxLabel;
