"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const build = require("@builder.io/qwik/build");
const CarouselView = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(carouselContextId);
  const totalWidthSig = qwik.useSignal(0);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [context2, totalWidthSig2] = qwik.useLexicalScope();
    track(() => context2.isDraggingSig.value);
    if (build.isBrowser)
      totalWidthSig2.value = context2.numSlidesSig.value * context2.slideRefsArray.value[0].value.offsetWidth * -1;
  }, "CarouselView_component_useTask_9Ss2QwaWFts", [
    context,
    totalWidthSig
  ]));
  const handlePointerMove$ = /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [context2] = qwik.useLexicalScope();
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
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref: context.viewportRef,
    get style() {
      return {
        overflowX: "visible",
        position: "relative"
      };
    },
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "iV_0"),
    onPointerDown$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
      const [context2, handlePointerMove$2] = qwik.useLexicalScope();
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
    "window:onPointerUp$": /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [handlePointerMove$2] = qwik.useLexicalScope();
      return window.removeEventListener("pointermove", handlePointerMove$2);
    }, "CarouselView_component_div_window_onPointerUp_dJIeuFu5XWA", [
      handlePointerMove$
    ]),
    onTransitionEnd$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [context2] = qwik.useLexicalScope();
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
exports.CarouselView = CarouselView;
