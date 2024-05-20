import { componentQrl, inlinedQrl, _restProps, useContext, useSignal, useTaskQrl, useLexicalScope, _jsxC, _jsxQ, _fnSignal, _jsxS, _wrapSignal, _IMMUTABLE } from "@builder.io/qwik";
import SelectContextId from "./select-context.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const HiddenNativeSelect = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const rest = _restProps(props, [
    "label",
    "autoComplete",
    "ref"
  ]);
  const context = useContext(SelectContextId);
  props.ref;
  const nativeSelectRef = useSignal();
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function modularFormsValidation({ track }) {
    const [context2, nativeSelectRef2] = useLexicalScope();
    track(() => context2.selectedIndexSetSig.value);
    if (isServer)
      return;
    const inputEvent = new Event("input", {
      bubbles: false
    });
    nativeSelectRef2.value?.dispatchEvent(inputEvent);
  }, "HiddenNativeSelect_component_useTask_WARAKOAv13I", [
    context,
    nativeSelectRef
  ]));
  return /* @__PURE__ */ _jsxC(VisuallyHidden, {
    children: /* @__PURE__ */ _jsxQ("div", null, {
      "aria-hidden": "true"
    }, /* @__PURE__ */ _jsxQ("label", null, null, [
      _fnSignal((p0) => p0.label, [
        props
      ], "p0.label"),
      /* @__PURE__ */ _jsxS("select", {
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
          /* @__PURE__ */ _jsxQ("option", null, null, null, 3, null),
          Array.from(context.itemsMapSig.value.entries()).map(([index, item]) => /* @__PURE__ */ _jsxQ("option", {
            value: _wrapSignal(item, "value"),
            selected: context.selectedIndexSetSig.value.has(index)
          }, null, item.displayValue, 1, item.value))
        ],
        onFocus$: /* @__PURE__ */ inlinedQrl(() => {
          const [context2] = useLexicalScope();
          return context2.triggerRef.value?.focus();
        }, "HiddenNativeSelect_component_VisuallyHidden_div_label_select_onFocus_5FLIObovaEM", [
          context
        ])
      }, {
        multiple: _fnSignal((p0) => p0.multiple, [
          context
        ], "p0.multiple"),
        tabIndex: _IMMUTABLE,
        autocomplete: _fnSignal((p0) => p0.autoComplete, [
          props
        ], "p0.autoComplete"),
        disabled: _fnSignal((p0) => p0.disabled, [
          context
        ], "p0.disabled"),
        required: _fnSignal((p0) => p0.required, [
          context
        ], "p0.required"),
        name: _fnSignal((p0) => p0.name, [
          context
        ], "p0.name"),
        style: {
          height: "1px"
        }
      }, 0, null)
    ], 1, null), 1, null)
  }, 1, "Mx_0");
}, "HiddenNativeSelect_component_2i50XJeTHm8"));
export {
  HiddenNativeSelect
};
