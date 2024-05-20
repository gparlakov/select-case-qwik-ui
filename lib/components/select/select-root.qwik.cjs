"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const useSelect = require("./use-select.qwik.cjs");
const SelectImpl = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const rest = qwik._restProps(props, [
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
  const rootRef = qwik.useSignal();
  const triggerRef = qwik.useSignal();
  const popoverRef = qwik.useSignal();
  const listboxRef = qwik.useSignal();
  const labelRef = qwik.useSignal();
  const groupRef = qwik.useSignal();
  const loop = props.loop ?? false;
  const localId = qwik.useId();
  const listboxId = `${localId}-listbox`;
  const labelId = `${localId}-label`;
  const valueId = `${localId}-value`;
  const itemsMapSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [props2] = qwik.useLexicalScope();
    return props2._itemsMap;
  }, "SelectImpl_component_itemsMapSig_useComputed_RFifViHn0qs", [
    props
  ]));
  const selectedIndexSetSig = qwik.useSignal(new Set(props._valuePropIndex ? [
    props._valuePropIndex
  ] : []));
  const highlightedIndexSig = qwik.useSignal(props._valuePropIndex ?? null);
  const isListboxOpenSig = qwik.useSignal(false);
  const scrollOptions = props.scrollOptions ?? {
    behavior: "instant",
    block: "nearest"
  };
  const currDisplayValueSig = qwik.useSignal();
  const initialLoadSig = qwik.useSignal(true);
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
  qwik.useContextProvider(selectContext.default, context);
  const select = useSelect.useSelect();
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async function reactiveUserValue({ track }) {
    const [context2, initialLoadSig2, itemsMapSig2, props2, select2] = qwik.useLexicalScope();
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
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function reactiveUserOpen({ track }) {
    const [isListboxOpenSig2, props2] = qwik.useLexicalScope();
    const bindOpenSig = props2["bind:open"];
    if (!bindOpenSig)
      return;
    track(() => bindOpenSig.value);
    isListboxOpenSig2.value = bindOpenSig.value ?? isListboxOpenSig2.value;
  }, "SelectImpl_component_useTask_1_hvVoj80aKG8", [
    isListboxOpenSig,
    props
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function onOpenChangeTask({ track }) {
    const [initialLoadSig2, isListboxOpenSig2, props2] = qwik.useLexicalScope();
    track(() => isListboxOpenSig2.value);
    if (!initialLoadSig2.value)
      props2.onOpenChange$?.(isListboxOpenSig2.value);
  }, "SelectImpl_component_useTask_2_0Anjq3AAMy8", [
    initialLoadSig,
    isListboxOpenSig,
    props
  ]));
  const activeDescendantSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [highlightedIndexSig2, isListboxOpenSig2, select2] = qwik.useLexicalScope();
    if (isListboxOpenSig2.value)
      return select2.getActiveDescendant$(highlightedIndexSig2.value ?? -1);
    else
      return "";
  }, "SelectImpl_component_activeDescendantSig_useComputed_l95HjSCwvSk", [
    highlightedIndexSig,
    isListboxOpenSig,
    select
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async function updateConsumerProps({ track }) {
    const [context2, props2, selectedIndexSetSig2] = qwik.useLexicalScope();
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
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [initialLoadSig2] = qwik.useLexicalScope();
    initialLoadSig2.value = false;
  }, "SelectImpl_component_useTask_4_Qdj9UDndCtQ", [
    initialLoadSig
  ]));
  return /* @__PURE__ */ qwik._jsxS("div", {
    role: "combobox",
    ref: rootRef,
    "data-open": context.isListboxOpenSig.value ? "" : void 0,
    "data-closed": !context.isListboxOpenSig.value ? "" : void 0,
    "data-disabled": context.disabled ? "" : void 0,
    "aria-controls": listboxId,
    get "aria-expanded"() {
      return context.isListboxOpenSig.value;
    },
    "aria-expanded": qwik._wrapSignal(context.isListboxOpenSig, "value"),
    "aria-haspopup": "listbox",
    get "aria-activedescendant"() {
      return activeDescendantSig.value;
    },
    "aria-labelledby": props._label ? labelId : valueId,
    "aria-multiselectable": context.multiple ? "true" : void 0,
    ...rest,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "7E_0")
  }, {
    role: qwik._IMMUTABLE,
    "aria-haspopup": qwik._IMMUTABLE,
    "aria-activedescendant": qwik._fnSignal((p0) => p0.value, [
      activeDescendantSig
    ], "p0.value")
  }, 0, "7E_1");
}, "SelectImpl_component_LOIA0uwCGgQ"));
exports.SelectImpl = SelectImpl;
