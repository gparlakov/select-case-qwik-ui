import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot, _fnSignal } from "@builder.io/qwik";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
const CarouselContainer = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(CarouselContextId);
  return /* @__PURE__ */ _jsxS("div", {
    ref: context.containerRef,
    get style() {
      return {
        transform: `translate3d(${context.slideOffsetSig.value}px, 0px, 0px)`,
        transitionDuration: `${context.transitionDurationSig.value}ms`,
        transitionDelay: "0ms"
      };
    },
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "uo_0")
  }, {
    style: _fnSignal((p0) => ({
      transform: `translate3d(${p0.slideOffsetSig.value}px, 0px, 0px)`,
      transitionDuration: `${p0.transitionDurationSig.value}ms`,
      transitionDelay: "0ms"
    }), [
      context
    ], '{transform:`translate3d(${p0.slideOffsetSig.value}px, 0px, 0px)`,transitionDuration:`${p0.transitionDurationSig.value}ms`,transitionDelay:"0ms"}')
  }, 0, "uo_1");
}, "CarouselContainer_component_sFVBO4SEwag"));
export {
  CarouselContainer
};
