"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const util = require("./util.qwik.cjs");
const progressContext = require("./progress-context.qwik.cjs");
const ProgressIndicator = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const { ...indicatorProps } = props;
  const context = qwik.useContext(progressContext.ProgressContext);
  const translateX = context.value ? `translateX(-${100 - context.value}%)` : void 0;
  return /* @__PURE__ */ qwik._jsxS("div", {
    style: {
      transform: translateX
    },
    title: "progress_indicator",
    "data-progress": util.getProgressState(context.value, context.max),
    get "data-value"() {
      return context.value ?? void 0;
    },
    get "data-max"() {
      return context.max;
    },
    ...indicatorProps
  }, {
    title: qwik._IMMUTABLE,
    "data-value": qwik._fnSignal((p0) => p0.value ?? void 0, [
      context
    ], "p0.value??undefined"),
    "data-max": qwik._fnSignal((p0) => p0.max, [
      context
    ], "p0.max")
  }, 0, "s2_0");
}, "ProgressIndicator_component_MiLC7TRoeho"));
exports.ProgressIndicator = ProgressIndicator;
