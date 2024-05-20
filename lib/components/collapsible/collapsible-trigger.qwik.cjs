"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const collapsibleContextId = require("./collapsible-context-id.qwik.cjs");
const CollapsibleTrigger = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "onClick$"
  ]);
  const context = qwik.useContext(collapsibleContextId.collapsibleContextId);
  const contentId = `${context.itemId}-content`;
  const handleClick$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2] = qwik.useLexicalScope();
    context2.isOpenSig.value = !context2.isOpenSig.value;
  }, "CollapsibleTrigger_component_handleClick_eGmrAVgOENE", [
    context
  ]);
  qwik.useOnWindow("resize", context.getContentDimensions$);
  return /* @__PURE__ */ qwik._jsxS("button", {
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
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "r4_0"),
    onClick$: [
      context.getContentDimensions$,
      handleClick$,
      props.onClick$
    ]
  }, {
    disabled: qwik._fnSignal((p0) => p0.disabled, [
      context
    ], "p0.disabled"),
    "data-disabled": qwik._fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined'),
    "data-open": qwik._fnSignal((p0) => p0.isOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isOpenSig.value?"":undefined'),
    "data-closed": qwik._fnSignal((p0) => !p0.isOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isOpenSig.value?"":undefined'),
    "aria-expanded": qwik._fnSignal((p0) => p0.isOpenSig.value, [
      context
    ], "p0.isOpenSig.value")
  }, 0, "r4_1");
}, "CollapsibleTrigger_component_8Eul8sB00nk"));
exports.CollapsibleTrigger = CollapsibleTrigger;
