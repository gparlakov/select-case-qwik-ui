import { componentQrl, inlinedQrl, _restProps, useSignal, _jsxS, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
const Toggle = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "pressed",
    "defaultPressed",
    "disabled"
  ]);
  const pressedState = useSignal(props.pressed || (props.defaultPressed ?? false));
  return /* @__PURE__ */ _jsxS("input", {
    type: "checkbox",
    ...props1,
    role: "switch",
    get "aria-pressed"() {
      return pressedState.value;
    },
    get "data-state"() {
      return pressedState.value ? "on" : "off";
    },
    get "data-disabled"() {
      return props.disabled ? "" : void 0;
    },
    get checked() {
      return pressedState.value;
    }
  }, {
    type: _IMMUTABLE,
    role: _IMMUTABLE,
    "aria-pressed": _fnSignal((p0) => p0.value, [
      pressedState
    ], "p0.value"),
    "data-state": _fnSignal((p0) => p0.value ? "on" : "off", [
      pressedState
    ], 'p0.value?"on":"off"'),
    "data-disabled": _fnSignal((p0) => p0.disabled ? "" : void 0, [
      props
    ], 'p0.disabled?"":undefined'),
    checked: _fnSignal((p0) => p0.value, [
      pressedState
    ], "p0.value")
  }, 0, "Q0_0");
}, "Toggle_component_6kbAVSKEJKc"));
export {
  Toggle
};
