import { componentQrl, inlinedQrl, _restProps, useContext, useComputedQrl, useLexicalScope, useSignal, _jsxS, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
const ComboboxOption = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(
  // remove non-li props from props
  (props) => {
    const props1 = _restProps(props, [
      "index",
      "resolved"
    ]);
    const context = useContext(ComboboxContextId);
    const optionId = `${context.localId}-${props.resolved.key}`;
    const isHighlightedSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
      const [context2, props2] = useLexicalScope();
      return !props2.resolved.disabled && context2.highlightedIndexSig.value === props2.index;
    }, "ComboboxOption_component_isHighlightedSig_useComputed_Il0abo8KxTw", [
      context,
      props
    ]));
    const onClickBehavior$ = /* @__PURE__ */ inlinedQrl(() => {
      const [context2, props2] = useLexicalScope();
      if (!context2.inputRef.value || props2.resolved.disabled)
        return;
      context2.inputRef.value.value = context2.filteredOptionsSig.value[props2.index]?.label, context2.isListboxOpenSig.value = false;
      context2.selectedIndexSig.value = props2.index;
    }, "ComboboxOption_component_onClickBehavior_RsGlnZv4S4E", [
      context,
      props
    ]);
    const optionRef = useSignal();
    return /* @__PURE__ */ _jsxS("li", {
      ...props1,
      id: optionId,
      ref: optionRef,
      tabIndex: -1,
      role: "option",
      get "data-highlighted"() {
        return isHighlightedSig.value;
      },
      get "aria-selected"() {
        return props.index === context.selectedIndexSig.value;
      },
      get "data-selected"() {
        return props.index === context.selectedIndexSig.value;
      },
      get "aria-disabled"() {
        return props.resolved.disabled;
      },
      get "data-disabled"() {
        return props.resolved.disabled;
      },
      "preventdefault:mousedown": true,
      children: /* @__PURE__ */ _jsxC(Slot, null, 3, "sM_0"),
      onClick$: [
        onClickBehavior$,
        props1.onClick$
      ],
      onMouseEnter$: [
        /* @__PURE__ */ inlinedQrl(() => {
          const [context2, props2] = useLexicalScope();
          return context2.highlightedIndexSig.value = props2.index;
        }, "ComboboxOption_component_li_onMouseEnter_hOFiuJVg4xM", [
          context,
          props
        ]),
        props1.onMouseEnter$
      ]
    }, {
      tabIndex: _IMMUTABLE,
      role: _IMMUTABLE,
      "data-highlighted": _fnSignal((p0) => p0.value, [
        isHighlightedSig
      ], "p0.value"),
      "aria-selected": _fnSignal((p0, p1) => p1.index === p0.selectedIndexSig.value, [
        context,
        props
      ], "p1.index===p0.selectedIndexSig.value"),
      "data-selected": _fnSignal((p0, p1) => p1.index === p0.selectedIndexSig.value, [
        context,
        props
      ], "p1.index===p0.selectedIndexSig.value"),
      "aria-disabled": _fnSignal((p0) => p0.resolved.disabled, [
        props
      ], "p0.resolved.disabled"),
      "data-disabled": _fnSignal((p0) => p0.resolved.disabled, [
        props
      ], "p0.resolved.disabled"),
      "preventdefault:mousedown": _IMMUTABLE
    }, 0, "sM_1");
  },
  "ComboboxOption_component_xCOt0Ob19RA"
));
export {
  ComboboxOption
};
