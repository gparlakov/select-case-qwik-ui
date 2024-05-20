import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, _fnSignal, Slot, useLexicalScope, _IMMUTABLE } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const ComboboxTrigger = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(ComboboxContextId);
  const listboxId = `${context.localId}-listbox`;
  return /* @__PURE__ */ _jsxS("button", {
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
      /* @__PURE__ */ _jsxC(VisuallyHidden, {
        children: [
          "Toggle list of",
          _fnSignal((p0) => p0.labelRef.value ? p0.labelRef.value?.innerText : "options", [
            context
          ], 'p0.labelRef.value?p0.labelRef.value?.innerText:"options"')
        ]
      }, 3, "ww_0"),
      /* @__PURE__ */ _jsxC(Slot, null, 3, "ww_1")
    ],
    onClick$: [
      /* @__PURE__ */ inlinedQrl(() => {
        const [context2] = useLexicalScope();
        context2.isListboxOpenSig.value = !context2.isListboxOpenSig.value;
      }, "ComboboxTrigger_component_button_onClick_Ofnds6J5kdg", [
        context
      ]),
      props.onClick$
    ]
  }, {
    tabIndex: _IMMUTABLE,
    "aria-haspopup": _IMMUTABLE,
    "aria-expanded": _fnSignal((p0) => p0.isListboxOpenSig.value, [
      context
    ], "p0.isListboxOpenSig.value")
  }, 0, "ww_2");
}, "ComboboxTrigger_component_s0zEznWq4wE"));
export {
  ComboboxTrigger
};
