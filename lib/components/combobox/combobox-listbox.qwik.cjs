"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const ComboboxListbox = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "optionRenderer$"
  ]);
  const context = qwik.useContext(comboboxContextId);
  const listboxId = `${context.localId}-listbox`;
  return /* @__PURE__ */ qwik._jsxS("ul", {
    ...props1,
    id: listboxId,
    ref: context.listboxRef,
    role: "listbox",
    style: {
      ...props1.style
    },
    children: [
      /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
        children: [
          "List of",
          qwik._fnSignal((p0) => p0.labelRef.value ? p0.labelRef.value?.innerText : "options", [
            context
          ], 'p0.labelRef.value?p0.labelRef.value?.innerText:"options"')
        ]
      }, 3, "ie_0"),
      context.filteredOptionsSig.value.map((resolved, filteredIndex) => props.optionRenderer$?.(resolved, filteredIndex))
    ]
  }, {
    role: qwik._IMMUTABLE
  }, 0, "ie_1");
}, "ComboboxListbox_component_AirRjutP4gU"));
exports.ComboboxListbox = ComboboxListbox;
