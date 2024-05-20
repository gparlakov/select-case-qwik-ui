import { componentQrl, inlinedQrl, useContext, useSignal, useTaskQrl, useLexicalScope, _jsxS, _jsxC, Slot, _fnSignal } from "@builder.io/qwik";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
const CarouselSlide = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(({ ...props }) => {
  const context = useContext(CarouselContextId);
  const slideRef = useSignal();
  const localIndexSig = useSignal(null);
  const handlePointerUp$ = /* @__PURE__ */ inlinedQrl(() => {
    const [context2, slideRef2] = useLexicalScope();
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [context2, localIndexSig2, slideRef2] = useLexicalScope();
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [context2, handlePointerUp$2] = useLexicalScope();
    track(() => context2.isDraggingSig.value);
    if (isServer)
      return;
    context2.isDraggingSig.value ? window.addEventListener("pointerup", handlePointerUp$2) : window.removeEventListener("pointerup", handlePointerUp$2);
  }, "CarouselSlide_component_useTask_1_e0bpmZ8u2JQ", [
    context,
    handlePointerUp$
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [context2, localIndexSig2, slideRef2] = useLexicalScope();
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
  return /* @__PURE__ */ _jsxS("div", {
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
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Fg_0")
  }, {
    "data-slide-num": _fnSignal((p0) => p0.value, [
      localIndexSig
    ], "p0.value"),
    style: _fnSignal((p0) => ({
      marginRight: `${p0.spaceBetweenSlides}px`
    }), [
      context
    ], "{marginRight:`${p0.spaceBetweenSlides}px`}")
  }, 0, "Fg_1");
}, "CarouselSlide_component_gm3NGIPifnA"));
export {
  CarouselSlide
};
