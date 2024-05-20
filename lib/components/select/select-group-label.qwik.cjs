"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const SelectGroupLabel = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const groupContext = qwik.useContext(selectContext.groupContextId);
  return /* @__PURE__ */ qwik._jsxS("li", {
    get id() {
      return groupContext.groupLabelId;
    },
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Lf_0")
  }, {
    id: qwik._fnSignal((p0) => p0.groupLabelId, [
      groupContext
    ], "p0.groupLabelId")
  }, 0, "Lf_1");
}, "SelectGroupLabel_component_wOj7hR8serU"));
exports.SelectGroupLabel = SelectGroupLabel;
