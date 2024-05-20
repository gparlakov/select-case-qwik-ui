import { componentQrl, inlinedQrl, _restProps, useContext, _jsxS, _jsxC, _fnSignal, _IMMUTABLE } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const ComboboxListbox = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "optionRenderer$"
  ]);
  const context = useContext(ComboboxContextId);
  const listboxId = `${context.localId}-listbox`;
  return /* @__PURE__ */ _jsxS("ul", {
    ...props1,
    id: listboxId,
    ref: context.listboxRef,
    role: "listbox",
    style: {
      ...props1.style
    },
    children: [
      /* @__PURE__ */ _jsxC(VisuallyHidden, {
        children: [
          "List of",
          _fnSignal((p0) => p0.labelRef.value ? p0.labelRef.value?.innerText : "options", [
            context
          ], 'p0.labelRef.value?p0.labelRef.value?.innerText:"options"')
        ]
      }, 3, "ie_0"),
      context.filteredOptionsSig.value.map((resolved, filteredIndex) => props.optionRenderer$?.(resolved, filteredIndex))
    ]
  }, {
    role: _IMMUTABLE
  }, 0, "ie_1");
}, "ComboboxListbox_component_AirRjutP4gU"));
export {
  ComboboxListbox
};
