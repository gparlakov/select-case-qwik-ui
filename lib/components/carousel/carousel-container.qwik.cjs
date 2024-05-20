"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const CarouselContainer = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(carouselContextId);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref: context.containerRef,
    get style() {
      return {
        transform: `translate3d(${context.slideOffsetSig.value}px, 0px, 0px)`,
        transitionDuration: `${context.transitionDurationSig.value}ms`,
        transitionDelay: "0ms"
      };
    },
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "uo_0")
  }, {
    style: qwik._fnSignal((p0) => ({
      transform: `translate3d(${p0.slideOffsetSig.value}px, 0px, 0px)`,
      transitionDuration: `${p0.transitionDurationSig.value}ms`,
      transitionDelay: "0ms"
    }), [
      context
    ], '{transform:`translate3d(${p0.slideOffsetSig.value}px, 0px, 0px)`,transitionDuration:`${p0.transitionDurationSig.value}ms`,transitionDelay:"0ms"}')
  }, 0, "uo_1");
}, "CarouselContainer_component_sFVBO4SEwag"));
exports.CarouselContainer = CarouselContainer;
