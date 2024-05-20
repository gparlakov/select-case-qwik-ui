import { componentQrl, inlinedQrl, useContext, useSignal, useTaskQrl, useLexicalScope, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
import { isBrowser } from "@builder.io/qwik/build";
const CarouselView = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(CarouselContextId);
  const totalWidthSig = useSignal(0);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [context2, totalWidthSig2] = useLexicalScope();
    track(() => context2.isDraggingSig.value);
    if (isBrowser)
      totalWidthSig2.value = context2.numSlidesSig.value * context2.slideRefsArray.value[0].value.offsetWidth * -1;
  }, "CarouselView_component_useTask_9Ss2QwaWFts", [
    context,
    totalWidthSig
  ]));
  const handlePointerMove$ = /* @__PURE__ */ inlinedQrl((e) => {
    const [context2] = useLexicalScope();
    if (context2.isDraggingSig.value) {
      if (!context2.containerRef.value)
        return;
      context2.transitionDurationSig.value = 0;
      const deltaX = e.clientX - context2.initialX.value;
      const containerLeftOffset = context2.initialTransformX.value + deltaX;
      if (containerLeftOffset > 50)
        return;
      context2.slideOffsetSig.value = containerLeftOffset;
      for (let i = 0; i < context2.slideRefsArray.value.length; i++) {
        const slideRef = context2.slideRefsArray.value[i];
        if (!context2.containerRef.value || !slideRef.value)
          return;
        const style = window.getComputedStyle(context2.containerRef.value);
        const matrix = new DOMMatrix(style.transform);
        const containerTranslateX = matrix.m41;
        const absContainerTranslateX = Math.abs(containerTranslateX);
        if (!context2.viewportRef.value)
          return;
        const slideSlideContainerLeftOffset = slideRef.value.offsetLeft;
        const slideRightEdgePos = slideSlideContainerLeftOffset + slideRef.value.offsetWidth + context2.spaceBetweenSlides;
        const carouselViewportWidth = context2.viewportRef.value.offsetWidth;
        const halfViewportWidth = carouselViewportWidth / 2;
        const isWithinBounds = absContainerTranslateX > slideSlideContainerLeftOffset - halfViewportWidth && absContainerTranslateX < slideRightEdgePos - halfViewportWidth;
        if (isWithinBounds) {
          context2.currentIndexSig.value = i || 0;
          break;
        }
      }
    }
  }, "CarouselView_component_handlePointerMove_8a9H6vjh904", [
    context
  ]);
  return /* @__PURE__ */ _jsxS("div", {
    ref: context.viewportRef,
    get style() {
      return {
        overflowX: "visible",
        position: "relative"
      };
    },
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "iV_0"),
    onPointerDown$: /* @__PURE__ */ inlinedQrl((e) => {
      const [context2, handlePointerMove$2] = useLexicalScope();
      if (e.pointerType === "mouse" && e.button !== 0)
        return;
      context2.initialX.value = e.clientX;
      if (context2.containerRef.value) {
        const style = window.getComputedStyle(context2.containerRef.value);
        const matrix = new DOMMatrix(style.transform);
        context2.initialTransformX.value = matrix.m41;
        context2.isDraggingSig.value = true;
      }
      window.addEventListener("pointermove", handlePointerMove$2);
    }, "CarouselView_component_div_onPointerDown_8DYJlE25LGs", [
      context,
      handlePointerMove$
    ]),
    "window:onPointerUp$": /* @__PURE__ */ inlinedQrl(() => {
      const [handlePointerMove$2] = useLexicalScope();
      return window.removeEventListener("pointermove", handlePointerMove$2);
    }, "CarouselView_component_div_window_onPointerUp_dJIeuFu5XWA", [
      handlePointerMove$
    ]),
    onTransitionEnd$: /* @__PURE__ */ inlinedQrl(() => {
      const [context2] = useLexicalScope();
      return context2.transitionDurationSig.value = 0;
    }, "CarouselView_component_div_onTransitionEnd_fKO5OXk3r4E", [
      context
    ])
  }, {
    style: {
      overflowX: "visible",
      position: "relative"
    }
  }, 0, "iV_1");
}, "CarouselView_component_P9IK33o8tWo"));
export {
  CarouselView
};
