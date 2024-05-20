"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const Combobox = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const { "bind:isListboxOpen": givenListboxOpenSig, "bind:isInputFocused": givenInputFocusedSig, "bind:inputValue": givenInputValueSig, "bind:highlightedIndex": givenHighlightedIndexSig, "bind:selectedIndex": givenSelectedIndexSig, options, defaultLabel = "", optionValueKey = "value", optionLabelKey = "label", optionDisabledKey = "disabled", filter$, ...rest } = props;
  const resolvedSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [optionDisabledKey2, optionLabelKey2, optionValueKey2, options2] = qwik.useLexicalScope();
    const labelKey = optionLabelKey2;
    const valueKey = optionValueKey2;
    const disabledKey = optionDisabledKey2;
    return options2.map((option, key) => {
      let value, label, disabled, lcLabel;
      if (typeof option === "string") {
        value = option;
        label = option;
        disabled = false;
      } else {
        value = option[valueKey];
        label = option[labelKey];
        disabled = !!option[disabledKey];
        if (typeof label !== "string")
          throw new Error('Qwik UI: Combobox optionLabelKey was not provided, and the option was not a string. Please provide a value for optionLabelKey, use the property name "label", or ensure that the option is a string.');
      }
      return {
        option,
        key,
        value,
        label,
        disabled,
        lcLabel
      };
    });
  }, "Combobox_component_resolvedSig_useComputed_ymWIqwTwFq8", [
    optionDisabledKey,
    optionLabelKey,
    optionValueKey,
    options
  ]));
  const filteredOptionsSig = qwik.useSignal([]);
  const defaultInputValueSig = qwik.useSignal(defaultLabel);
  const inputValueSig = givenInputValueSig || defaultInputValueSig;
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async function filterAPITask({ track }) {
    const [filter$2, filteredOptionsSig2, inputValueSig2, resolvedSig2] = qwik.useLexicalScope();
    const opts = track(() => resolvedSig2.value);
    const inputValue = track(() => inputValueSig2.value);
    let filterFunction = await track(() => filter$2)?.resolve();
    if (!filterFunction)
      filterFunction = (value, options2) => {
        if (!options2)
          return [];
        if (!value)
          return options2;
        const lcValue = value.toLowerCase();
        return options2.filter((option) => {
          let { lcLabel } = option;
          if (!lcLabel) {
            lcLabel = option.label.toLowerCase();
            option.lcLabel = lcLabel;
          }
          return lcLabel.includes(lcValue);
        });
      };
    filteredOptionsSig2.value = filterFunction(inputValue, opts);
  }, "Combobox_component_useTask_2EBaD9nFn0s", [
    filter$,
    filteredOptionsSig,
    inputValueSig,
    resolvedSig
  ]));
  const labelRef = qwik.useSignal();
  const listboxRef = qwik.useSignal();
  const inputRef = qwik.useSignal();
  const popoverRef = qwik.useSignal();
  const triggerRef = qwik.useSignal();
  const defaultSelectedIndexSig = qwik.useSignal(-1);
  const selectedIndexSig = givenSelectedIndexSig || defaultSelectedIndexSig;
  const defaultListboxOpenSig = qwik.useSignal(false);
  const isListboxOpenSig = givenListboxOpenSig || defaultListboxOpenSig;
  const defaultInputFocusedSig = qwik.useSignal(false);
  const isInputFocusedSig = givenInputFocusedSig || defaultInputFocusedSig;
  const defaultHighlightedIndexSig = qwik.useSignal(-1);
  const highlightedIndexSig = givenHighlightedIndexSig || defaultHighlightedIndexSig;
  const localId = qwik.useId();
  const context = {
    filteredOptionsSig,
    inputValueSig,
    labelRef,
    inputRef,
    popoverRef,
    localId,
    triggerRef,
    listboxRef,
    isInputFocusedSig,
    isListboxOpenSig,
    highlightedIndexSig,
    selectedIndexSig,
    defaultLabel,
    optionValueKey,
    optionLabelKey,
    optionDisabledKey
  };
  qwik.useContextProvider(comboboxContextId, context);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ...rest,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "CI_0")
  }, null, 0, "CI_1");
}, "Combobox_component_w82gCdRfr9s"));
exports.Combobox = Combobox;
