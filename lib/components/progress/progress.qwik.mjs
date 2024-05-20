import { componentQrl, inlinedQrl, _restProps, useContextProvider, _jsxS, _jsxC, Slot, _IMMUTABLE } from "@builder.io/qwik";
import { isValidMaxNumber, isValidValueNumber, isNumber, defaultGetValueLabel, getProgressState } from "./util.qwik.mjs";
import { ProgressContext } from "./progress-context.qwik.mjs";
const DEFAULT_MAX = 100;
const Progress = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const progressProps = _restProps(props, [
    "max",
    "value",
    "getValueLabel"
  ]);
  const max = isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
  const value = isValidValueNumber(props.value, max) ? props.value : null;
  const valueLabel = isNumber(value) ? (props.getValueLabel ?? defaultGetValueLabel)(value, max) : void 0;
  useContextProvider(ProgressContext, {
    value,
    max
  });
  return /* @__PURE__ */ _jsxS("div", {
    "aria-valuemax": max,
    "aria-valuemin": 0,
    "aria-valuenow": isNumber(value) ? value : void 0,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    title: "progress-bar",
    "data-progress": getProgressState(value, max),
    "data-value": value ?? void 0,
    "data-max": max,
    ...progressProps,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "kS_0")
  }, {
    "aria-valuemin": _IMMUTABLE,
    role: _IMMUTABLE,
    title: _IMMUTABLE
  }, 0, "kS_1");
}, "Progress_component_niRn6BTtJA4"));
export {
  Progress,
  DEFAULT_MAX as _auto_DEFAULT_MAX
};
