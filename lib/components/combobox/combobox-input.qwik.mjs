import { componentQrl, inlinedQrl, _restProps, useContext, useSignal, _qrlSync, useTaskQrl, useLexicalScope, _jsxS, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
import { getActiveDescendant, getNextEnabledOptionIndex, getPrevEnabledOptionIndex } from "./utils.qwik.mjs";
const ComboboxInput = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "disableOnBlur"
  ]);
  const context = useContext(ComboboxContextId);
  const inputId = props1.id || `${context.localId}-input`;
  const listboxId = `${context.localId}-listbox`;
  const isDefaultLabelNeededSig = useSignal(true);
  const onInputBehavior$ = /* @__PURE__ */ inlinedQrl((e) => {
    const [context2] = useLexicalScope();
    context2.isListboxOpenSig.value = true;
    context2.highlightedIndexSig.value = -1;
    const inputElement = e.target;
    context2.inputValueSig.value = inputElement.value;
  }, "ComboboxInput_component_onInputBehavior_y42DroQuSOk", [
    context
  ]);
  const onKeydownBehavior$ = /* @__PURE__ */ inlinedQrl((e) => {
    const [context2] = useLexicalScope();
    if (e.key === "ArrowDown") {
      if (context2.isListboxOpenSig.value) {
        const nextEnabledOptionIndex = getNextEnabledOptionIndex(context2.highlightedIndexSig.value, context2.filteredOptionsSig);
        context2.highlightedIndexSig.value = nextEnabledOptionIndex;
      } else if (context2.highlightedIndexSig.value === -1) {
        const firstEnabledOptionIndex = getNextEnabledOptionIndex(-1, context2.filteredOptionsSig);
        context2.highlightedIndexSig.value = firstEnabledOptionIndex;
      }
      context2.isListboxOpenSig.value = true;
    }
    if (e.key === "ArrowUp") {
      const prevEnabledOptionIndex = getPrevEnabledOptionIndex(context2.highlightedIndexSig.value, context2.filteredOptionsSig);
      context2.highlightedIndexSig.value = prevEnabledOptionIndex;
    }
    if (e.key === "Enter") {
      context2.isListboxOpenSig.value = false;
      context2.selectedIndexSig.value = context2.highlightedIndexSig.value;
      if (context2.filteredOptionsSig.value[context2.highlightedIndexSig.value].disabled)
        return;
      const inputElement = e.target;
      inputElement.value = context2.filteredOptionsSig.value[context2.highlightedIndexSig.value].label;
    }
    if (e.key === "Home") {
      const firstEnabledOptionIndex = getNextEnabledOptionIndex(-1, context2.filteredOptionsSig);
      context2.highlightedIndexSig.value = firstEnabledOptionIndex;
    }
    if (e.key === "End") {
      const lastEnabledOptionIndex = getPrevEnabledOptionIndex(context2.filteredOptionsSig.value.length, context2.filteredOptionsSig);
      context2.highlightedIndexSig.value = lastEnabledOptionIndex;
    }
    if (e.key === "Escape")
      context2.isListboxOpenSig.value = false;
  }, "ComboboxInput_component_onKeydownBehavior_fFkeMAumuBg", [
    context
  ]);
  const handleKeyDownSync$ = _qrlSync((e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp")
      e.preventDefault();
  }, 'e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();}}');
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function isLabelNeededTask() {
    const [context2, isDefaultLabelNeededSig2] = useLexicalScope();
    if (!context2.inputRef.value || !context2.defaultLabel)
      return;
    if (context2.inputRef.value.value === context2.defaultLabel)
      isDefaultLabelNeededSig2.value = false;
  }, "ComboboxInput_component_useTask_0DlzpUEU6gw", [
    context,
    isDefaultLabelNeededSig
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function highlightDefaultLabelTask() {
    const [context2] = useLexicalScope();
    const defaultIndex = context2.filteredOptionsSig.value.findIndex(({ label }) => label === context2.defaultLabel);
    if (defaultIndex !== -1)
      context2.highlightedIndexSig.value = defaultIndex;
  }, "ComboboxInput_component_useTask_1_riLC1yZfpuo", [
    context
  ]));
  return /* @__PURE__ */ _jsxS("input", {
    type: "text",
    ...props1,
    id: inputId || props1.id,
    ref: context.inputRef,
    role: "combobox",
    get "aria-expanded"() {
      return context.isListboxOpenSig.value;
    },
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-activedescendant": context.isListboxOpenSig.value ? getActiveDescendant(context.highlightedIndexSig, context.filteredOptionsSig, context.localId) : "",
    "aria-controls": listboxId,
    get value() {
      return context.inputValueSig.value;
    },
    onInput$: [
      onInputBehavior$,
      props1.onInput$
    ],
    onBlur$: [
      /* @__PURE__ */ inlinedQrl(() => {
        const [context2, props2] = useLexicalScope();
        (props2.disableOnBlur ?? false) || (context2.isListboxOpenSig.value = false);
      }, "ComboboxInput_component_input_onBlur_8u0ov0nWWiA", [
        context,
        props
      ]),
      props1.onBlur$
    ],
    onKeyDown$: [
      handleKeyDownSync$,
      onKeydownBehavior$,
      props1.onKeyDown$
    ]
  }, {
    type: _IMMUTABLE,
    role: _IMMUTABLE,
    "aria-expanded": _fnSignal((p0) => p0.isListboxOpenSig.value, [
      context
    ], "p0.isListboxOpenSig.value"),
    "aria-haspopup": _IMMUTABLE,
    "aria-autocomplete": _IMMUTABLE,
    value: _fnSignal((p0) => p0.inputValueSig.value, [
      context
    ], "p0.inputValueSig.value")
  }, 0, "ow_0");
}, "ComboboxInput_component_yFDiAv66vAc"));
export {
  ComboboxInput
};
