import { componentQrl, inlinedQrl, useContext, _jsxS, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { getProgressState } from "./util.qwik.mjs";
import { ProgressContext } from "./progress-context.qwik.mjs";
const ProgressIndicator = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const { ...indicatorProps } = props;
  const context = useContext(ProgressContext);
  const translateX = context.value ? `translateX(-${100 - context.value}%)` : void 0;
  return /* @__PURE__ */ _jsxS("div", {
    style: {
      transform: translateX
    },
    title: "progress_indicator",
    "data-progress": getProgressState(context.value, context.max),
    get "data-value"() {
      return context.value ?? void 0;
    },
    get "data-max"() {
      return context.max;
    },
    ...indicatorProps
  }, {
    title: _IMMUTABLE,
    "data-value": _fnSignal((p0) => p0.value ?? void 0, [
      context
    ], "p0.value??undefined"),
    "data-max": _fnSignal((p0) => p0.max, [
      context
    ], "p0.max")
  }, 0, "s2_0");
}, "ProgressIndicator_component_MiLC7TRoeho"));
export {
  ProgressIndicator
};
