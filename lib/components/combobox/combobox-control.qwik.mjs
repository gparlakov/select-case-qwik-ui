import { componentQrl, inlinedQrl, useContext, useSignal, _jsxS, _jsxC, Slot, _IMMUTABLE, useLexicalScope } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
const ComboboxControl = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(ComboboxContextId);
  const controlRef = useSignal();
  const handleMousedown$ = /* @__PURE__ */ inlinedQrl(() => {
    const [context2, controlRef2] = useLexicalScope();
    if (controlRef2.value) {
      context2.inputRef.value?.focus();
      if (!context2.inputRef.value)
        return;
    }
  }, "ComboboxControl_component_handleMousedown_yZrtgE0qOFw", [
    context,
    controlRef
  ]);
  return /* @__PURE__ */ _jsxS("div", {
    ref: controlRef,
    ...props,
    "preventdefault:mousedown": true,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "YO_0"),
    onMouseDown$: [
      handleMousedown$,
      props.onMouseDown$
    ]
  }, {
    "preventdefault:mousedown": _IMMUTABLE
  }, 0, "YO_1");
}, "ComboboxControl_component_eTldxoUzgiQ"));
export {
  ComboboxControl
};
