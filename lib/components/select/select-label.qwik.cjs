"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const SelectLabel = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(selectContext.default);
  const labelId = `${context.localId}-label`;
  const handleClick$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2] = qwik.useLexicalScope();
    if (context2.disabled)
      return;
    context2.triggerRef.value?.focus();
  }, "SelectLabel_component_handleClick_wLMz8Kfq9G8", [
    context
  ]);
  const handleMouseDownSync$ = qwik._qrlSync((e) => {
    if (!e.defaultPrevented && e.detail > 1)
      e.preventDefault();
  }, "e=>{if(!e.defaultPrevented&&e.detail>1)e.preventDefault();}");
  return /* @__PURE__ */ qwik._jsxS("div", {
    get "data-disabled"() {
      return context.disabled ? "" : void 0;
    },
    ref: context.labelRef,
    id: labelId,
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "fs_0"),
    onClick$: [
      handleClick$,
      props.onClick$
    ],
    onMouseDown$: [
      handleMouseDownSync$,
      props.onMouseDown$
    ]
  }, {
    "data-disabled": qwik._fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined')
  }, 0, "fs_1");
}, "SelectLabel_component_nHiIynZjmAA"));
exports.SelectLabel = SelectLabel;
