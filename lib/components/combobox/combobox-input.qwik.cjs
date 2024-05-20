"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const utils = require("./utils.qwik.cjs");
const ComboboxInput = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "disableOnBlur"
  ]);
  const context = qwik.useContext(comboboxContextId);
  const inputId = props1.id || `${context.localId}-input`;
  const listboxId = `${context.localId}-listbox`;
  const isDefaultLabelNeededSig = qwik.useSignal(true);
  const onInputBehavior$ = /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [context2] = qwik.useLexicalScope();
    context2.isListboxOpenSig.value = true;
    context2.highlightedIndexSig.value = -1;
    const inputElement = e.target;
    context2.inputValueSig.value = inputElement.value;
  }, "ComboboxInput_component_onInputBehavior_y42DroQuSOk", [
    context
  ]);
  const onKeydownBehavior$ = /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [context2] = qwik.useLexicalScope();
    if (e.key === "ArrowDown") {
      if (context2.isListboxOpenSig.value) {
        const nextEnabledOptionIndex = utils.getNextEnabledOptionIndex(context2.highlightedIndexSig.value, context2.filteredOptionsSig);
        context2.highlightedIndexSig.value = nextEnabledOptionIndex;
      } else if (context2.highlightedIndexSig.value === -1) {
        const firstEnabledOptionIndex = utils.getNextEnabledOptionIndex(-1, context2.filteredOptionsSig);
        context2.highlightedIndexSig.value = firstEnabledOptionIndex;
      }
      context2.isListboxOpenSig.value = true;
    }
    if (e.key === "ArrowUp") {
      const prevEnabledOptionIndex = utils.getPrevEnabledOptionIndex(context2.highlightedIndexSig.value, context2.filteredOptionsSig);
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
      const firstEnabledOptionIndex = utils.getNextEnabledOptionIndex(-1, context2.filteredOptionsSig);
      context2.highlightedIndexSig.value = firstEnabledOptionIndex;
    }
    if (e.key === "End") {
      const lastEnabledOptionIndex = utils.getPrevEnabledOptionIndex(context2.filteredOptionsSig.value.length, context2.filteredOptionsSig);
      context2.highlightedIndexSig.value = lastEnabledOptionIndex;
    }
    if (e.key === "Escape")
      context2.isListboxOpenSig.value = false;
  }, "ComboboxInput_component_onKeydownBehavior_fFkeMAumuBg", [
    context
  ]);
  const handleKeyDownSync$ = qwik._qrlSync((e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp")
      e.preventDefault();
  }, 'e=>{if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();}}');
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function isLabelNeededTask() {
    const [context2, isDefaultLabelNeededSig2] = qwik.useLexicalScope();
    if (!context2.inputRef.value || !context2.defaultLabel)
      return;
    if (context2.inputRef.value.value === context2.defaultLabel)
      isDefaultLabelNeededSig2.value = false;
  }, "ComboboxInput_component_useTask_0DlzpUEU6gw", [
    context,
    isDefaultLabelNeededSig
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function highlightDefaultLabelTask() {
    const [context2] = qwik.useLexicalScope();
    const defaultIndex = context2.filteredOptionsSig.value.findIndex(({ label }) => label === context2.defaultLabel);
    if (defaultIndex !== -1)
      context2.highlightedIndexSig.value = defaultIndex;
  }, "ComboboxInput_component_useTask_1_riLC1yZfpuo", [
    context
  ]));
  return /* @__PURE__ */ qwik._jsxS("input", {
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
    "aria-activedescendant": context.isListboxOpenSig.value ? utils.getActiveDescendant(context.highlightedIndexSig, context.filteredOptionsSig, context.localId) : "",
    "aria-controls": listboxId,
    get value() {
      return context.inputValueSig.value;
    },
    onInput$: [
      onInputBehavior$,
      props1.onInput$
    ],
    onBlur$: [
      /* @__PURE__ */ qwik.inlinedQrl(() => {
        const [context2, props2] = qwik.useLexicalScope();
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
    type: qwik._IMMUTABLE,
    role: qwik._IMMUTABLE,
    "aria-expanded": qwik._fnSignal((p0) => p0.isListboxOpenSig.value, [
      context
    ], "p0.isListboxOpenSig.value"),
    "aria-haspopup": qwik._IMMUTABLE,
    "aria-autocomplete": qwik._IMMUTABLE,
    value: qwik._fnSignal((p0) => p0.inputValueSig.value, [
      context
    ], "p0.inputValueSig.value")
  }, 0, "ow_0");
}, "ComboboxInput_component_yFDiAv66vAc"));
exports.ComboboxInput = ComboboxInput;
