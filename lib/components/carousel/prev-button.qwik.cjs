"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const CarouselPrev = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(carouselContextId);
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props,
    get "aria-disabled"() {
      return context.currentIndexSig.value === 0;
    },
    get disabled() {
      return context.currentIndexSig.value === 0;
    },
    children: [
      /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
        children: "previous slide"
      }, 3, "d7_0"),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "d7_1")
    ],
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [context2] = qwik.useLexicalScope();
      context2.currentIndexSig.value--;
      context2.transitionDurationSig.value = 625;
    }, "CarouselPrev_component_button_onClick_h8L7AyihzWw", [
      context
    ])
  }, {
    "aria-disabled": qwik._fnSignal((p0) => p0.currentIndexSig.value === 0, [
      context
    ], "p0.currentIndexSig.value===0"),
    disabled: qwik._fnSignal((p0) => p0.currentIndexSig.value === 0, [
      context
    ], "p0.currentIndexSig.value===0")
  }, 0, "d7_2");
}, "CarouselPrev_component_8PV4YZXJ7mE"));
exports.CarouselPrev = CarouselPrev;
