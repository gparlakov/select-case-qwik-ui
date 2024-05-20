"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const Carousel = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(({ spaceBetweenSlides = 0, "bind:currSlideIndex": givenSlideIndexSig, ...props }) => {
  const defaultIndexSig = qwik.useSignal(0);
  const currentIndexSig = givenSlideIndexSig ? givenSlideIndexSig : defaultIndexSig;
  const slideOffsetSig = qwik.useSignal(0);
  const numSlidesSig = qwik.useSignal(0);
  const transitionDurationSig = qwik.useSignal(0);
  const viewportRef = qwik.useSignal();
  const containerRef = qwik.useSignal();
  const isDraggingSig = qwik.useSignal(false);
  const initialX = qwik.useSignal(0);
  const initialTransformX = qwik.useSignal(0);
  const slideRefsArray = qwik.useSignal([]);
  const context = {
    slideOffsetSig,
    currentIndexSig,
    numSlidesSig,
    transitionDurationSig,
    viewportRef,
    containerRef,
    spaceBetweenSlides,
    isDraggingSig,
    initialX,
    initialTransformX,
    slideRefsArray
  };
  qwik.useContextProvider(carouselContextId, context);
  return /* @__PURE__ */ qwik._jsxS("section", {
    "aria-roledescription": "carousel",
    role: "group",
    ...props,
    children: [
      /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [
          "Slide ",
          qwik._wrapSignal(context.currentIndexSig, "value"),
          " of",
          qwik._wrapSignal(context.numSlidesSig, "value")
        ],
        [qwik._IMMUTABLE]: {
          "aria-live": qwik._IMMUTABLE,
          "aria-atomic": qwik._IMMUTABLE
        }
      }, 1, "e2_0"),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "e2_1")
    ]
  }, {
    "aria-roledescription": qwik._IMMUTABLE,
    role: qwik._IMMUTABLE
  }, 0, "e2_2");
}, "Carousel_component_OS0BnZIZ0qg"));
exports.Carousel = Carousel;
