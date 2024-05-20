"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const SelectGroup = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(selectContext.default);
  const groupLabelId = `${context.localId}-group-label`;
  const groupContext = {
    groupLabelId
  };
  qwik.useContextProvider(selectContext.groupContextId, groupContext);
  return /* @__PURE__ */ qwik._jsxS("div", {
    "aria-labelledby": groupLabelId,
    role: "group",
    ...props,
    ref: context.groupRef,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "3G_0")
  }, {
    role: qwik._IMMUTABLE
  }, 0, "3G_1");
}, "SelectGroup_component_znniKb6Pxg4"));
exports.SelectGroup = SelectGroup;
