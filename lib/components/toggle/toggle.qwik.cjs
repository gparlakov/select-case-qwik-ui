"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const Toggle = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "pressed",
    "defaultPressed",
    "disabled"
  ]);
  const pressedState = qwik.useSignal(props.pressed || (props.defaultPressed ?? false));
  return /* @__PURE__ */ qwik._jsxS("input", {
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
    type: qwik._IMMUTABLE,
    role: qwik._IMMUTABLE,
    "aria-pressed": qwik._fnSignal((p0) => p0.value, [
      pressedState
    ], "p0.value"),
    "data-state": qwik._fnSignal((p0) => p0.value ? "on" : "off", [
      pressedState
    ], 'p0.value?"on":"off"'),
    "data-disabled": qwik._fnSignal((p0) => p0.disabled ? "" : void 0, [
      props
    ], 'p0.disabled?"":undefined'),
    checked: qwik._fnSignal((p0) => p0.value, [
      pressedState
    ], "p0.value")
  }, 0, "Q0_0");
}, "Toggle_component_6kbAVSKEJKc"));
exports.Toggle = Toggle;
