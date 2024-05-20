import { componentQrl, inlinedQrl, useContext, _qrlSync, _jsxS, _jsxC, Slot, _fnSignal, useLexicalScope } from "@builder.io/qwik";
import SelectContextId from "./select-context.qwik.mjs";
const SelectLabel = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(SelectContextId);
  const labelId = `${context.localId}-label`;
  const handleClick$ = /* @__PURE__ */ inlinedQrl(() => {
    const [context2] = useLexicalScope();
    if (context2.disabled)
      return;
    context2.triggerRef.value?.focus();
  }, "SelectLabel_component_handleClick_wLMz8Kfq9G8", [
    context
  ]);
  const handleMouseDownSync$ = _qrlSync((e) => {
    if (!e.defaultPrevented && e.detail > 1)
      e.preventDefault();
  }, "e=>{if(!e.defaultPrevented&&e.detail>1)e.preventDefault();}");
  return /* @__PURE__ */ _jsxS("div", {
    get "data-disabled"() {
      return context.disabled ? "" : void 0;
    },
    ref: context.labelRef,
    id: labelId,
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "fs_0"),
    onClick$: [
      handleClick$,
      props.onClick$
    ],
    onMouseDown$: [
      handleMouseDownSync$,
      props.onMouseDown$
    ]
  }, {
    "data-disabled": _fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined')
  }, 0, "fs_1");
}, "SelectLabel_component_nHiIynZjmAA"));
export {
  SelectLabel
};
