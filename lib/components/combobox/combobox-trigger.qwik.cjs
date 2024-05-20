"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const ComboboxTrigger = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(comboboxContextId);
  const listboxId = `${context.localId}-listbox`;
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props,
    ref: context.triggerRef,
    tabIndex: -1,
    "aria-haspopup": "listbox",
    "aria-controls": listboxId,
    popovertarget: listboxId,
    get "aria-expanded"() {
      return context.isListboxOpenSig.value;
    },
    children: [
      /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
        children: [
          "Toggle list of",
          qwik._fnSignal((p0) => p0.labelRef.value ? p0.labelRef.value?.innerText : "options", [
            context
          ], 'p0.labelRef.value?p0.labelRef.value?.innerText:"options"')
        ]
      }, 3, "ww_0"),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "ww_1")
    ],
    onClick$: [
      /* @__PURE__ */ qwik.inlinedQrl(() => {
        const [context2] = qwik.useLexicalScope();
        context2.isListboxOpenSig.value = !context2.isListboxOpenSig.value;
      }, "ComboboxTrigger_component_button_onClick_Ofnds6J5kdg", [
        context
      ]),
      props.onClick$
    ]
  }, {
    tabIndex: qwik._IMMUTABLE,
    "aria-haspopup": qwik._IMMUTABLE,
    "aria-expanded": qwik._fnSignal((p0) => p0.isListboxOpenSig.value, [
      context
    ], "p0.isListboxOpenSig.value")
  }, 0, "ww_2");
}, "ComboboxTrigger_component_s0zEznWq4wE"));
exports.ComboboxTrigger = ComboboxTrigger;
