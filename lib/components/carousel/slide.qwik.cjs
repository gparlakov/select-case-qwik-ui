"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const build = require("@builder.io/qwik/build");
const CarouselSlide = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(({ ...props }) => {
  const context = qwik.useContext(carouselContextId);
  const slideRef = qwik.useSignal();
  const localIndexSig = qwik.useSignal(null);
  const handlePointerUp$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, slideRef2] = qwik.useLexicalScope();
    context2.isDraggingSig.value = false;
    if (!context2.containerRef.value || !slideRef2.value)
      return;
    const style = window.getComputedStyle(context2.containerRef.value);
    const matrix = new DOMMatrix(style.transform);
    const containerTranslateX = matrix.m41;
    const absContainerTranslateX = Math.abs(containerTranslateX);
    if (!context2.viewportRef.value)
      return;
    const slideSlideContainerLeftOffset = slideRef2.value.offsetLeft;
    const slideRightEdgePos = slideSlideContainerLeftOffset + slideRef2.value.offsetWidth + context2.spaceBetweenSlides;
    const carouselViewportWidth = context2.viewportRef.value.offsetWidth;
    const halfViewportWidth = carouselViewportWidth / 2;
    const isWithinBounds = absContainerTranslateX > slideSlideContainerLeftOffset - halfViewportWidth && absContainerTranslateX < slideRightEdgePos - halfViewportWidth;
    if (isWithinBounds) {
      context2.transitionDurationSig.value = 300;
      context2.slideOffsetSig.value = slideSlideContainerLeftOffset * -1;
    }
  }, "CarouselSlide_component_handlePointerUp_krVj0GtqPbE", [
    context,
    slideRef
  ]);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, localIndexSig2, slideRef2] = qwik.useLexicalScope();
    localIndexSig2.value = context2.numSlidesSig.value;
    context2.numSlidesSig.value++;
    context2.slideRefsArray.value = [
      ...context2.slideRefsArray.value,
      slideRef2
    ];
    return;
  }, "CarouselSlide_component_useTask_tWh0vq9wVZw", [
    context,
    localIndexSig,
    slideRef
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [context2, handlePointerUp$2] = qwik.useLexicalScope();
    track(() => context2.isDraggingSig.value);
    if (build.isServer)
      return;
    context2.isDraggingSig.value ? window.addEventListener("pointerup", handlePointerUp$2) : window.removeEventListener("pointerup", handlePointerUp$2);
  }, "CarouselSlide_component_useTask_1_e0bpmZ8u2JQ", [
    context,
    handlePointerUp$
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [context2, localIndexSig2, slideRef2] = qwik.useLexicalScope();
    track(() => context2.currentIndexSig.value);
    if (localIndexSig2.value === context2.currentIndexSig.value && slideRef2.value) {
      context2.transitionDurationSig.value = 625;
      context2.slideOffsetSig.value = slideRef2.value.offsetLeft * -1;
    }
    setTimeout(() => {
      context2.transitionDurationSig.value = 625;
    }, 0);
  }, "CarouselSlide_component_useTask_2_59L0uSpZNIg", [
    context,
    localIndexSig,
    slideRef
  ]));
  return /* @__PURE__ */ qwik._jsxS("div", {
    get "data-slide-num"() {
      return localIndexSig.value;
    },
    get style() {
      return {
        marginRight: `${context.spaceBetweenSlides}px`
      };
    },
    ref: slideRef,
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Fg_0")
  }, {
    "data-slide-num": qwik._fnSignal((p0) => p0.value, [
      localIndexSig
    ], "p0.value"),
    style: qwik._fnSignal((p0) => ({
      marginRight: `${p0.spaceBetweenSlides}px`
    }), [
      context
    ], "{marginRight:`${p0.spaceBetweenSlides}px`}")
  }, 0, "Fg_1");
}, "CarouselSlide_component_gm3NGIPifnA"));
exports.CarouselSlide = CarouselSlide;
