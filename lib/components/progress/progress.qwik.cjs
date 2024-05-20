"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const util = require("./util.qwik.cjs");
const progressContext = require("./progress-context.qwik.cjs");
const DEFAULT_MAX = 100;
const Progress = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const progressProps = qwik._restProps(props, [
    "max",
    "value",
    "getValueLabel"
  ]);
  const max = util.isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
  const value = util.isValidValueNumber(props.value, max) ? props.value : null;
  const valueLabel = util.isNumber(value) ? (props.getValueLabel ?? util.defaultGetValueLabel)(value, max) : void 0;
  qwik.useContextProvider(progressContext.ProgressContext, {
    value,
    max
  });
  return /* @__PURE__ */ qwik._jsxS("div", {
    "aria-valuemax": max,
    "aria-valuemin": 0,
    "aria-valuenow": util.isNumber(value) ? value : void 0,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    title: "progress-bar",
    "data-progress": util.getProgressState(value, max),
    "data-value": value ?? void 0,
    "data-max": max,
    ...progressProps,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "kS_0")
  }, {
    "aria-valuemin": qwik._IMMUTABLE,
    role: qwik._IMMUTABLE,
    title: qwik._IMMUTABLE
  }, 0, "kS_1");
}, "Progress_component_niRn6BTtJA4"));
exports.Progress = Progress;
exports._auto_DEFAULT_MAX = DEFAULT_MAX;
