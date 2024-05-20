"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const build = require("@builder.io/qwik/build");
const selectContext = require("./select-context.qwik.cjs");
const useSelect = require("./use-select.qwik.cjs");
const SelectItem = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const rest = qwik._restProps(props, [
    "_index",
    "disabled"
  ]);
  const context = qwik.useContext(selectContext.default);
  const itemRef = qwik.useSignal();
  const localIndexSig = qwik.useSignal(null);
  const itemId = `${context.localId}-${props._index}`;
  const select = useSelect.useSelect();
  const isSelectedSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, props2] = qwik.useLexicalScope();
    const index = props2._index ?? null;
    return !props2.disabled && context2.selectedIndexSetSig.value.has(index);
  }, "SelectItem_component_isSelectedSig_useComputed_ZzDUIF70lCg", [
    context,
    props
  ]));
  const isHighlightedSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, props2] = qwik.useLexicalScope();
    return !props2.disabled && context2.highlightedIndexSig.value === props2._index;
  }, "SelectItem_component_isHighlightedSig_useComputed_pW0ReusWq0o", [
    context,
    props
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function getIndexTask() {
    const [localIndexSig2, props2] = qwik.useLexicalScope();
    if (props2._index === void 0)
      throw Error("Qwik UI: Select component item cannot find its proper index.");
    localIndexSig2.value = props2._index;
  }, "SelectItem_component_useTask_mkRM52Y9k8I", [
    localIndexSig,
    props
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function scrollableTask({ track, cleanup }) {
    const [context2, isHighlightedSig2, itemRef2] = qwik.useLexicalScope();
    track(() => context2.highlightedIndexSig.value);
    if (build.isServer)
      return;
    let observer;
    const checkVisibility = (entries) => {
      const [entry] = entries;
      if (isHighlightedSig2.value && !entry.isIntersecting)
        itemRef2.value?.scrollIntoView(context2.scrollOptions);
    };
    cleanup(() => observer?.disconnect());
    if (build.isBrowser) {
      observer = new IntersectionObserver(checkVisibility, {
        root: context2.listboxRef.value,
        threshold: 1
      });
      if (itemRef2.value)
        observer.observe(itemRef2.value);
    }
  }, "SelectItem_component_useTask_1_0u95EuXe3mk", [
    context,
    isHighlightedSig,
    itemRef
  ]));
  const handleClick$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [context2, localIndexSig2, props2, select2] = qwik.useLexicalScope();
    if (props2.disabled || localIndexSig2.value === null)
      return;
    if (context2.multiple) {
      await select2.selectionManager$(localIndexSig2.value, "toggle");
      context2.triggerRef.value?.focus();
    } else {
      await select2.selectionManager$(localIndexSig2.value, "add");
      context2.isListboxOpenSig.value = false;
    }
  }, "SelectItem_component_handleClick_aMhKEqqhhu8", [
    context,
    localIndexSig,
    props,
    select
  ]);
  const handlePointerOver$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, localIndexSig2, props2] = qwik.useLexicalScope();
    if (props2.disabled)
      return;
    if (localIndexSig2.value !== null)
      context2.highlightedIndexSig.value = localIndexSig2.value;
  }, "SelectItem_component_handlePointerOver_kBrl5OIcytg", [
    context,
    localIndexSig,
    props
  ]);
  const selectContext$1 = {
    isSelectedSig
  };
  qwik.useContextProvider(selectContext.selectItemContextId, selectContext$1);
  return /* @__PURE__ */ qwik._jsxS("li", {
    ...rest,
    id: itemId,
    ref: itemRef,
    tabIndex: -1,
    get "aria-selected"() {
      return isSelectedSig.value;
    },
    get "aria-disabled"() {
      return props.disabled === true ? "true" : "false";
    },
    get "data-selected"() {
      return isSelectedSig.value ? "" : void 0;
    },
    get "data-highlighted"() {
      return isHighlightedSig.value ? "" : void 0;
    },
    get "data-disabled"() {
      return props.disabled ? "" : void 0;
    },
    "data-item": true,
    role: "option",
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Tj_0"),
    onClick$: [
      handleClick$,
      props.onClick$
    ],
    onPointerOver$: [
      handlePointerOver$,
      props.onPointerOver$
    ]
  }, {
    tabIndex: qwik._IMMUTABLE,
    "aria-selected": qwik._fnSignal((p0) => p0.value, [
      isSelectedSig
    ], "p0.value"),
    "aria-disabled": qwik._fnSignal((p0) => p0.disabled === true ? "true" : "false", [
      props
    ], 'p0.disabled===true?"true":"false"'),
    "data-selected": qwik._fnSignal((p0) => p0.value ? "" : void 0, [
      isSelectedSig
    ], 'p0.value?"":undefined'),
    "data-highlighted": qwik._fnSignal((p0) => p0.value ? "" : void 0, [
      isHighlightedSig
    ], 'p0.value?"":undefined'),
    "data-disabled": qwik._fnSignal((p0) => p0.disabled ? "" : void 0, [
      props
    ], 'p0.disabled?"":undefined'),
    "data-item": qwik._IMMUTABLE,
    role: qwik._IMMUTABLE
  }, 0, "Tj_1");
}, "SelectItem_component_SalcJHstpRk"));
exports.SelectItem = SelectItem;
