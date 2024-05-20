"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const CarouselNext = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(carouselContextId);
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props,
    get "aria-disabled"() {
      return context.currentIndexSig.value + 1 === context.numSlidesSig.value;
    },
    get disabled() {
      return context.currentIndexSig.value + 1 === context.numSlidesSig.value;
    },
    children: [
      /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
        children: "next slide"
      }, 3, "2u_0"),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "2u_1")
    ],
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [context2] = qwik.useLexicalScope();
      context2.currentIndexSig.value++;
      context2.transitionDurationSig.value = 625;
    }, "CarouselNext_component_button_onClick_cDvHfoPP03g", [
      context
    ])
  }, {
    "aria-disabled": qwik._fnSignal((p0) => p0.currentIndexSig.value + 1 === p0.numSlidesSig.value, [
      context
    ], "p0.currentIndexSig.value+1===p0.numSlidesSig.value"),
    disabled: qwik._fnSignal((p0) => p0.currentIndexSig.value + 1 === p0.numSlidesSig.value, [
      context
    ], "p0.currentIndexSig.value+1===p0.numSlidesSig.value")
  }, 0, "2u_2");
}, "CarouselNext_component_U7ZVx09Y0t4"));
exports.CarouselNext = CarouselNext;
