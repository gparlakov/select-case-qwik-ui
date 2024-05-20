"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const SelectDisplayText = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const rest = qwik._restProps(props, [
    "placeholder"
  ]);
  const context = qwik.useContext(selectContext.default);
  const valueId = `${context.localId}-value`;
  const displayStrSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [context2, props2] = qwik.useLexicalScope();
    qwik._jsxBranch();
    if (context2.multiple)
      return /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "NK_0");
    if (context2.selectedIndexSetSig.value.size === 0)
      return props2.placeholder;
    else
      return context2.multiple ? context2.currDisplayValueSig.value : context2.currDisplayValueSig.value?.[0] ?? props2.placeholder;
  }, "SelectDisplayText_component_displayStrSig_useComputed_dgZ7eJaVrXM", [
    context,
    props
  ]));
  return /* @__PURE__ */ qwik._jsxS("span", {
    id: valueId,
    get "data-open"() {
      return context.isListboxOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isListboxOpenSig.value ? "" : void 0;
    },
    "data-value": true,
    ...rest,
    children: qwik._fnSignal((p0) => p0.value, [
      displayStrSig
    ], "p0.value")
  }, {
    "data-open": qwik._fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isListboxOpenSig.value?"":undefined'),
    "data-closed": qwik._fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isListboxOpenSig.value?"":undefined'),
    "data-value": qwik._IMMUTABLE
  }, 0, "NK_1");
}, "SelectDisplayText_component_65V3kjwqjOQ"));
exports.SelectDisplayText = SelectDisplayText;
