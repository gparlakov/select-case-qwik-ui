"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const selectContext = require("./select-context.qwik.cjs");
const SelectItemIndicator = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik._jsxBranch();
  const selectContext$1 = qwik.useContext(selectContext.selectItemContextId);
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: selectContext$1.isSelectedSig.value && /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "4z_0")
  }, 1, "4z_1");
}, "SelectItemIndicator_component_HzeK1aYFPJk"));
exports.SelectItemIndicator = SelectItemIndicator;
