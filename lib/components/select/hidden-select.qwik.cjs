"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const build = require("@builder.io/qwik/build");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const HiddenNativeSelect = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const rest = qwik._restProps(props, [
    "label",
    "autoComplete",
    "ref"
  ]);
  const context = qwik.useContext(selectContext.default);
  props.ref;
  const nativeSelectRef = qwik.useSignal();
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function modularFormsValidation({ track }) {
    const [context2, nativeSelectRef2] = qwik.useLexicalScope();
    track(() => context2.selectedIndexSetSig.value);
    if (build.isServer)
      return;
    const inputEvent = new Event("input", {
      bubbles: false
    });
    nativeSelectRef2.value?.dispatchEvent(inputEvent);
  }, "HiddenNativeSelect_component_useTask_WARAKOAv13I", [
    context,
    nativeSelectRef
  ]));
  return /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
    children: /* @__PURE__ */ qwik._jsxQ("div", null, {
      "aria-hidden": "true"
    }, /* @__PURE__ */ qwik._jsxQ("label", null, null, [
      qwik._fnSignal((p0) => p0.label, [
        props
      ], "p0.label"),
      /* @__PURE__ */ qwik._jsxS("select", {
        ref: (element) => {
          nativeSelectRef.value = element;
          props.ref?.(element);
        },
        get multiple() {
          return context.multiple;
        },
        tabIndex: -1,
        get autocomplete() {
          return props.autoComplete;
        },
        get disabled() {
          return context.disabled;
        },
        get required() {
          return context.required;
        },
        get name() {
          return context.name;
        },
        get style() {
          return {
            height: "1px"
          };
        },
        ...rest,
        children: [
          /* @__PURE__ */ qwik._jsxQ("option", null, null, null, 3, null),
          Array.from(context.itemsMapSig.value.entries()).map(([index, item]) => /* @__PURE__ */ qwik._jsxQ("option", {
            value: qwik._wrapSignal(item, "value"),
            selected: context.selectedIndexSetSig.value.has(index)
          }, null, item.displayValue, 1, item.value))
        ],
        onFocus$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [context2] = qwik.useLexicalScope();
          return context2.triggerRef.value?.focus();
        }, "HiddenNativeSelect_component_VisuallyHidden_div_label_select_onFocus_5FLIObovaEM", [
          context
        ])
      }, {
        multiple: qwik._fnSignal((p0) => p0.multiple, [
          context
        ], "p0.multiple"),
        tabIndex: qwik._IMMUTABLE,
        autocomplete: qwik._fnSignal((p0) => p0.autoComplete, [
          props
        ], "p0.autoComplete"),
        disabled: qwik._fnSignal((p0) => p0.disabled, [
          context
        ], "p0.disabled"),
        required: qwik._fnSignal((p0) => p0.required, [
          context
        ], "p0.required"),
        name: qwik._fnSignal((p0) => p0.name, [
          context
        ], "p0.name"),
        style: {
          height: "1px"
        }
      }, 0, null)
    ], 1, null), 1, null)
  }, 1, "Mx_0");
}, "HiddenNativeSelect_component_2i50XJeTHm8"));
exports.HiddenNativeSelect = HiddenNativeSelect;
