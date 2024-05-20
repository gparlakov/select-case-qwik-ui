import { componentQrl, inlinedQrl, _restProps, useContext, useSignal, useComputedQrl, useLexicalScope, useTaskQrl, useContextProvider, _jsxS, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { isServer, isBrowser } from "@builder.io/qwik/build";
import SelectContextId, { selectItemContextId } from "./select-context.qwik.mjs";
import { useSelect } from "./use-select.qwik.mjs";
const SelectItem = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const rest = _restProps(props, [
    "_index",
    "disabled"
  ]);
  const context = useContext(SelectContextId);
  const itemRef = useSignal();
  const localIndexSig = useSignal(null);
  const itemId = `${context.localId}-${props._index}`;
  const select = useSelect();
  const isSelectedSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [context2, props2] = useLexicalScope();
    const index = props2._index ?? null;
    return !props2.disabled && context2.selectedIndexSetSig.value.has(index);
  }, "SelectItem_component_isSelectedSig_useComputed_ZzDUIF70lCg", [
    context,
    props
  ]));
  const isHighlightedSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [context2, props2] = useLexicalScope();
    return !props2.disabled && context2.highlightedIndexSig.value === props2._index;
  }, "SelectItem_component_isHighlightedSig_useComputed_pW0ReusWq0o", [
    context,
    props
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function getIndexTask() {
    const [localIndexSig2, props2] = useLexicalScope();
    if (props2._index === void 0)
      throw Error("Qwik UI: Select component item cannot find its proper index.");
    localIndexSig2.value = props2._index;
  }, "SelectItem_component_useTask_mkRM52Y9k8I", [
    localIndexSig,
    props
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function scrollableTask({ track, cleanup }) {
    const [context2, isHighlightedSig2, itemRef2] = useLexicalScope();
    track(() => context2.highlightedIndexSig.value);
    if (isServer)
      return;
    let observer;
    const checkVisibility = (entries) => {
      const [entry] = entries;
      if (isHighlightedSig2.value && !entry.isIntersecting)
        itemRef2.value?.scrollIntoView(context2.scrollOptions);
    };
    cleanup(() => observer?.disconnect());
    if (isBrowser) {
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
  const handleClick$ = /* @__PURE__ */ inlinedQrl(async () => {
    const [context2, localIndexSig2, props2, select2] = useLexicalScope();
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
  const handlePointerOver$ = /* @__PURE__ */ inlinedQrl(() => {
    const [context2, localIndexSig2, props2] = useLexicalScope();
    if (props2.disabled)
      return;
    if (localIndexSig2.value !== null)
      context2.highlightedIndexSig.value = localIndexSig2.value;
  }, "SelectItem_component_handlePointerOver_kBrl5OIcytg", [
    context,
    localIndexSig,
    props
  ]);
  const selectContext = {
    isSelectedSig
  };
  useContextProvider(selectItemContextId, selectContext);
  return /* @__PURE__ */ _jsxS("li", {
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
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Tj_0"),
    onClick$: [
      handleClick$,
      props.onClick$
    ],
    onPointerOver$: [
      handlePointerOver$,
      props.onPointerOver$
    ]
  }, {
    tabIndex: _IMMUTABLE,
    "aria-selected": _fnSignal((p0) => p0.value, [
      isSelectedSig
    ], "p0.value"),
    "aria-disabled": _fnSignal((p0) => p0.disabled === true ? "true" : "false", [
      props
    ], 'p0.disabled===true?"true":"false"'),
    "data-selected": _fnSignal((p0) => p0.value ? "" : void 0, [
      isSelectedSig
    ], 'p0.value?"":undefined'),
    "data-highlighted": _fnSignal((p0) => p0.value ? "" : void 0, [
      isHighlightedSig
    ], 'p0.value?"":undefined'),
    "data-disabled": _fnSignal((p0) => p0.disabled ? "" : void 0, [
      props
    ], 'p0.disabled?"":undefined'),
    "data-item": _IMMUTABLE,
    role: _IMMUTABLE
  }, 0, "Tj_1");
}, "SelectItem_component_SalcJHstpRk"));
export {
  SelectItem
};
