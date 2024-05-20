import { componentQrl, inlinedQrl, useSignal, useContextProvider, _jsxS, _jsxC, _wrapSignal, _IMMUTABLE, Slot } from "@builder.io/qwik";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const Carousel = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(({ spaceBetweenSlides = 0, "bind:currSlideIndex": givenSlideIndexSig, ...props }) => {
  const defaultIndexSig = useSignal(0);
  const currentIndexSig = givenSlideIndexSig ? givenSlideIndexSig : defaultIndexSig;
  const slideOffsetSig = useSignal(0);
  const numSlidesSig = useSignal(0);
  const transitionDurationSig = useSignal(0);
  const viewportRef = useSignal();
  const containerRef = useSignal();
  const isDraggingSig = useSignal(false);
  const initialX = useSignal(0);
  const initialTransformX = useSignal(0);
  const slideRefsArray = useSignal([]);
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
  useContextProvider(CarouselContextId, context);
  return /* @__PURE__ */ _jsxS("section", {
    "aria-roledescription": "carousel",
    role: "group",
    ...props,
    children: [
      /* @__PURE__ */ _jsxC(VisuallyHidden, {
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [
          "Slide ",
          _wrapSignal(context.currentIndexSig, "value"),
          " of",
          _wrapSignal(context.numSlidesSig, "value")
        ],
        [_IMMUTABLE]: {
          "aria-live": _IMMUTABLE,
          "aria-atomic": _IMMUTABLE
        }
      }, 1, "e2_0"),
      /* @__PURE__ */ _jsxC(Slot, null, 3, "e2_1")
    ]
  }, {
    "aria-roledescription": _IMMUTABLE,
    role: _IMMUTABLE
  }, 0, "e2_2");
}, "Carousel_component_OS0BnZIZ0qg"));
export {
  Carousel
};
