import { componentQrl, inlinedQrl, _restProps, useSignal, useId, useComputedQrl, useLexicalScope, useContextProvider, useTaskQrl, _jsxS, _wrapSignal, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import SelectContextId from "./select-context.qwik.mjs";
import { useSelect } from "./use-select.qwik.mjs";
const SelectImpl = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const rest = _restProps(props, [
    "_itemsMap",
    "_valuePropIndex",
    "onChange$",
    "onOpenChange$",
    "scrollOptions",
    "loop",
    "multiple",
    "_label",
    "name",
    "required",
    "disabled"
  ]);
  const rootRef = useSignal();
  const triggerRef = useSignal();
  const popoverRef = useSignal();
  const listboxRef = useSignal();
  const labelRef = useSignal();
  const groupRef = useSignal();
  const loop = props.loop ?? false;
  const localId = useId();
  const listboxId = `${localId}-listbox`;
  const labelId = `${localId}-label`;
  const valueId = `${localId}-value`;
  const itemsMapSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [props2] = useLexicalScope();
    return props2._itemsMap;
  }, "SelectImpl_component_itemsMapSig_useComputed_RFifViHn0qs", [
    props
  ]));
  const selectedIndexSetSig = useSignal(new Set(props._valuePropIndex ? [
    props._valuePropIndex
  ] : []));
  const highlightedIndexSig = useSignal(props._valuePropIndex ?? null);
  const isListboxOpenSig = useSignal(false);
  const scrollOptions = props.scrollOptions ?? {
    behavior: "instant",
    block: "nearest"
  };
  const currDisplayValueSig = useSignal();
  const initialLoadSig = useSignal(true);
  const context = {
    itemsMapSig,
    currDisplayValueSig,
    triggerRef,
    popoverRef,
    listboxRef,
    labelRef,
    groupRef,
    localId,
    highlightedIndexSig,
    selectedIndexSetSig,
    isListboxOpenSig,
    scrollOptions,
    loop,
    multiple: props.multiple ?? false,
    name: props.name,
    required: props.required,
    disabled: props.disabled
  };
  useContextProvider(SelectContextId, context);
  const select = useSelect();
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async function reactiveUserValue({ track }) {
    const [context2, initialLoadSig2, itemsMapSig2, props2, select2] = useLexicalScope();
    const bindValueSig = props2["bind:value"];
    if (!bindValueSig)
      return;
    track(() => bindValueSig.value);
    for (const [index, item] of itemsMapSig2.value)
      if (bindValueSig.value?.includes(item.value)) {
        await select2.selectionManager$(index, "add");
        if (initialLoadSig2.value)
          context2.highlightedIndexSig.value = index;
      } else
        await select2.selectionManager$(index, "remove");
  }, "SelectImpl_component_useTask_kqrLyNxAJrE", [
    context,
    initialLoadSig,
    itemsMapSig,
    props,
    select
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function reactiveUserOpen({ track }) {
    const [isListboxOpenSig2, props2] = useLexicalScope();
    const bindOpenSig = props2["bind:open"];
    if (!bindOpenSig)
      return;
    track(() => bindOpenSig.value);
    isListboxOpenSig2.value = bindOpenSig.value ?? isListboxOpenSig2.value;
  }, "SelectImpl_component_useTask_1_hvVoj80aKG8", [
    isListboxOpenSig,
    props
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function onOpenChangeTask({ track }) {
    const [initialLoadSig2, isListboxOpenSig2, props2] = useLexicalScope();
    track(() => isListboxOpenSig2.value);
    if (!initialLoadSig2.value)
      props2.onOpenChange$?.(isListboxOpenSig2.value);
  }, "SelectImpl_component_useTask_2_0Anjq3AAMy8", [
    initialLoadSig,
    isListboxOpenSig,
    props
  ]));
  const activeDescendantSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [highlightedIndexSig2, isListboxOpenSig2, select2] = useLexicalScope();
    if (isListboxOpenSig2.value)
      return select2.getActiveDescendant$(highlightedIndexSig2.value ?? -1);
    else
      return "";
  }, "SelectImpl_component_activeDescendantSig_useComputed_l95HjSCwvSk", [
    highlightedIndexSig,
    isListboxOpenSig,
    select
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async function updateConsumerProps({ track }) {
    const [context2, props2, selectedIndexSetSig2] = useLexicalScope();
    const bindValueSig = props2["bind:value"];
    const bindDisplayTextSig = props2["bind:displayText"];
    track(() => selectedIndexSetSig2.value);
    const values = [];
    const displayValues = [];
    for (const index of context2.selectedIndexSetSig.value) {
      const item = context2.itemsMapSig.value.get(index);
      if (item) {
        values.push(item.value);
        displayValues.push(item.displayValue);
      }
    }
    if (props2.onChange$ && selectedIndexSetSig2.value.size > 0)
      await props2.onChange$(context2.multiple ? values : values[0]);
    if (bindValueSig && bindValueSig.value) {
      const currUserSigValues = JSON.stringify(bindValueSig.value);
      const newUserSigValues = JSON.stringify(values);
      if (currUserSigValues !== newUserSigValues) {
        if (context2.multiple)
          bindValueSig.value = values;
        else
          bindValueSig.value = values[0];
      }
    }
    context2.currDisplayValueSig.value = displayValues;
    if (bindDisplayTextSig && context2.currDisplayValueSig.value)
      bindDisplayTextSig.value = context2.multiple ? context2.currDisplayValueSig.value : context2.currDisplayValueSig.value[0];
  }, "SelectImpl_component_useTask_3_iKtTML4vgYM", [
    context,
    props,
    selectedIndexSetSig
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [initialLoadSig2] = useLexicalScope();
    initialLoadSig2.value = false;
  }, "SelectImpl_component_useTask_4_Qdj9UDndCtQ", [
    initialLoadSig
  ]));
  return /* @__PURE__ */ _jsxS("div", {
    role: "combobox",
    ref: rootRef,
    "data-open": context.isListboxOpenSig.value ? "" : void 0,
    "data-closed": !context.isListboxOpenSig.value ? "" : void 0,
    "data-disabled": context.disabled ? "" : void 0,
    "aria-controls": listboxId,
    get "aria-expanded"() {
      return context.isListboxOpenSig.value;
    },
    "aria-expanded": _wrapSignal(context.isListboxOpenSig, "value"),
    "aria-haspopup": "listbox",
    get "aria-activedescendant"() {
      return activeDescendantSig.value;
    },
    "aria-labelledby": props._label ? labelId : valueId,
    "aria-multiselectable": context.multiple ? "true" : void 0,
    ...rest,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "7E_0")
  }, {
    role: _IMMUTABLE,
    "aria-haspopup": _IMMUTABLE,
    "aria-activedescendant": _fnSignal((p0) => p0.value, [
      activeDescendantSig
    ], "p0.value")
  }, 0, "7E_1");
}, "SelectImpl_component_LOIA0uwCGgQ"));
export {
  SelectImpl
};
