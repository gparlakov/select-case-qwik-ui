import { componentQrl, inlinedQrl, _restProps, useContext, useComputedQrl, useLexicalScope, _jsxBranch, _jsxC, Slot, _jsxS, _fnSignal, _IMMUTABLE } from "@builder.io/qwik";
import SelectContextId from "./select-context.qwik.mjs";
const SelectDisplayText = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const rest = _restProps(props, [
    "placeholder"
  ]);
  const context = useContext(SelectContextId);
  const valueId = `${context.localId}-value`;
  const displayStrSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(async () => {
    const [context2, props2] = useLexicalScope();
    _jsxBranch();
    if (context2.multiple)
      return /* @__PURE__ */ _jsxC(Slot, null, 3, "NK_0");
    if (context2.selectedIndexSetSig.value.size === 0)
      return props2.placeholder;
    else
      return context2.multiple ? context2.currDisplayValueSig.value : context2.currDisplayValueSig.value?.[0] ?? props2.placeholder;
  }, "SelectDisplayText_component_displayStrSig_useComputed_dgZ7eJaVrXM", [
    context,
    props
  ]));
  return /* @__PURE__ */ _jsxS("span", {
    id: valueId,
    get "data-open"() {
      return context.isListboxOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isListboxOpenSig.value ? "" : void 0;
    },
    "data-value": true,
    ...rest,
    children: _fnSignal((p0) => p0.value, [
      displayStrSig
    ], "p0.value")
  }, {
    "data-open": _fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isListboxOpenSig.value?"":undefined'),
    "data-closed": _fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isListboxOpenSig.value?"":undefined'),
    "data-value": _IMMUTABLE
  }, 0, "NK_1");
}, "SelectDisplayText_component_65V3kjwqjOQ"));
export {
  SelectDisplayText
};
