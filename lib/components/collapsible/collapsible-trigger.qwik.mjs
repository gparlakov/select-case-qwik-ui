import { componentQrl, inlinedQrl, _restProps, useContext, useOnWindow, _jsxS, _jsxC, Slot, _fnSignal, useLexicalScope } from "@builder.io/qwik";
import { collapsibleContextId } from "./collapsible-context-id.qwik.mjs";
const CollapsibleTrigger = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "onClick$"
  ]);
  const context = useContext(collapsibleContextId);
  const contentId = `${context.itemId}-content`;
  const handleClick$ = /* @__PURE__ */ inlinedQrl(() => {
    const [context2] = useLexicalScope();
    context2.isOpenSig.value = !context2.isOpenSig.value;
  }, "CollapsibleTrigger_component_handleClick_eGmrAVgOENE", [
    context
  ]);
  useOnWindow("resize", context.getContentDimensions$);
  return /* @__PURE__ */ _jsxS("button", {
    ...props1,
    ref: context.triggerRef,
    get disabled() {
      return context.disabled;
    },
    get "data-disabled"() {
      return context.disabled ? "" : void 0;
    },
    get "data-open"() {
      return context.isOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isOpenSig.value ? "" : void 0;
    },
    get "aria-expanded"() {
      return context.isOpenSig.value;
    },
    "aria-controls": contentId,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "r4_0"),
    onClick$: [
      context.getContentDimensions$,
      handleClick$,
      props.onClick$
    ]
  }, {
    disabled: _fnSignal((p0) => p0.disabled, [
      context
    ], "p0.disabled"),
    "data-disabled": _fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined'),
    "data-open": _fnSignal((p0) => p0.isOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isOpenSig.value?"":undefined'),
    "data-closed": _fnSignal((p0) => !p0.isOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isOpenSig.value?"":undefined'),
    "aria-expanded": _fnSignal((p0) => p0.isOpenSig.value, [
      context
    ], "p0.isOpenSig.value")
  }, 0, "r4_1");
}, "CollapsibleTrigger_component_8Eul8sB00nk"));
export {
  CollapsibleTrigger
};
