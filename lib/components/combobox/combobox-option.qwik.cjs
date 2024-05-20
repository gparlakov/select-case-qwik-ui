"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const comboboxContextId = require("./combobox-context-id.qwik.cjs");
const ComboboxOption = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(
  // remove non-li props from props
  (props) => {
    const props1 = qwik._restProps(props, [
      "index",
      "resolved"
    ]);
    const context = qwik.useContext(comboboxContextId);
    const optionId = `${context.localId}-${props.resolved.key}`;
    const isHighlightedSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
      const [context2, props2] = qwik.useLexicalScope();
      return !props2.resolved.disabled && context2.highlightedIndexSig.value === props2.index;
    }, "ComboboxOption_component_isHighlightedSig_useComputed_Il0abo8KxTw", [
      context,
      props
    ]));
    const onClickBehavior$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [context2, props2] = qwik.useLexicalScope();
      if (!context2.inputRef.value || props2.resolved.disabled)
        return;
      context2.inputRef.value.value = context2.filteredOptionsSig.value[props2.index]?.label, context2.isListboxOpenSig.value = false;
      context2.selectedIndexSig.value = props2.index;
    }, "ComboboxOption_component_onClickBehavior_RsGlnZv4S4E", [
      context,
      props
    ]);
    const optionRef = qwik.useSignal();
    return /* @__PURE__ */ qwik._jsxS("li", {
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
      children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "sM_0"),
      onClick$: [
        onClickBehavior$,
        props1.onClick$
      ],
      onMouseEnter$: [
        /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [context2, props2] = qwik.useLexicalScope();
          return context2.highlightedIndexSig.value = props2.index;
        }, "ComboboxOption_component_li_onMouseEnter_hOFiuJVg4xM", [
          context,
          props
        ]),
        props1.onMouseEnter$
      ]
    }, {
      tabIndex: qwik._IMMUTABLE,
      role: qwik._IMMUTABLE,
      "data-highlighted": qwik._fnSignal((p0) => p0.value, [
        isHighlightedSig
      ], "p0.value"),
      "aria-selected": qwik._fnSignal((p0, p1) => p1.index === p0.selectedIndexSig.value, [
        context,
        props
      ], "p1.index===p0.selectedIndexSig.value"),
      "data-selected": qwik._fnSignal((p0, p1) => p1.index === p0.selectedIndexSig.value, [
        context,
        props
      ], "p1.index===p0.selectedIndexSig.value"),
      "aria-disabled": qwik._fnSignal((p0) => p0.resolved.disabled, [
        props
      ], "p0.resolved.disabled"),
      "data-disabled": qwik._fnSignal((p0) => p0.resolved.disabled, [
        props
      ], "p0.resolved.disabled"),
      "preventdefault:mousedown": qwik._IMMUTABLE
    }, 0, "sM_1");
  },
  "ComboboxOption_component_xCOt0Ob19RA"
));
exports.ComboboxOption = ComboboxOption;
