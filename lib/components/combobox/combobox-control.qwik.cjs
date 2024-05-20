"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const ComboboxControl = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(comboboxContextId);
  const controlRef = qwik.useSignal();
  const handleMousedown$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, controlRef2] = qwik.useLexicalScope();
    if (controlRef2.value) {
      context2.inputRef.value?.focus();
      if (!context2.inputRef.value)
        return;
    }
  }, "ComboboxControl_component_handleMousedown_yZrtgE0qOFw", [
    context,
    controlRef
  ]);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref: controlRef,
    ...props,
    "preventdefault:mousedown": true,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "YO_0"),
    onMouseDown$: [
      handleMousedown$,
      props.onMouseDown$
    ]
  }, {
    "preventdefault:mousedown": qwik._IMMUTABLE
  }, 0, "YO_1");
}, "ComboboxControl_component_eTldxoUzgiQ"));
exports.ComboboxControl = ComboboxControl;
