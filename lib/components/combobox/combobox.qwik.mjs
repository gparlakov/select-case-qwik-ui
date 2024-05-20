import { componentQrl, inlinedQrl, useComputedQrl, useLexicalScope, useSignal, useTaskQrl, useId, useContextProvider, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
const Combobox = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const { "bind:isListboxOpen": givenListboxOpenSig, "bind:isInputFocused": givenInputFocusedSig, "bind:inputValue": givenInputValueSig, "bind:highlightedIndex": givenHighlightedIndexSig, "bind:selectedIndex": givenSelectedIndexSig, options, defaultLabel = "", optionValueKey = "value", optionLabelKey = "label", optionDisabledKey = "disabled", filter$, ...rest } = props;
  const resolvedSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [optionDisabledKey2, optionLabelKey2, optionValueKey2, options2] = useLexicalScope();
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
  const filteredOptionsSig = useSignal([]);
  const defaultInputValueSig = useSignal(defaultLabel);
  const inputValueSig = givenInputValueSig || defaultInputValueSig;
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async function filterAPITask({ track }) {
    const [filter$2, filteredOptionsSig2, inputValueSig2, resolvedSig2] = useLexicalScope();
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
  const labelRef = useSignal();
  const listboxRef = useSignal();
  const inputRef = useSignal();
  const popoverRef = useSignal();
  const triggerRef = useSignal();
  const defaultSelectedIndexSig = useSignal(-1);
  const selectedIndexSig = givenSelectedIndexSig || defaultSelectedIndexSig;
  const defaultListboxOpenSig = useSignal(false);
  const isListboxOpenSig = givenListboxOpenSig || defaultListboxOpenSig;
  const defaultInputFocusedSig = useSignal(false);
  const isInputFocusedSig = givenInputFocusedSig || defaultInputFocusedSig;
  const defaultHighlightedIndexSig = useSignal(-1);
  const highlightedIndexSig = givenHighlightedIndexSig || defaultHighlightedIndexSig;
  const localId = useId();
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
  useContextProvider(ComboboxContextId, context);
  return /* @__PURE__ */ _jsxS("div", {
    ...rest,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "CI_0")
  }, null, 0, "CI_1");
}, "Combobox_component_w82gCdRfr9s"));
export {
  Combobox
};
