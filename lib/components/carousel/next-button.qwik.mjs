import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot, useLexicalScope, _fnSignal } from "@builder.io/qwik";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const CarouselNext = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(CarouselContextId);
  return /* @__PURE__ */ _jsxS("button", {
    ...props,
    get "aria-disabled"() {
      return context.currentIndexSig.value + 1 === context.numSlidesSig.value;
    },
    get disabled() {
      return context.currentIndexSig.value + 1 === context.numSlidesSig.value;
    },
    children: [
      /* @__PURE__ */ _jsxC(VisuallyHidden, {
        children: "next slide"
      }, 3, "2u_0"),
      /* @__PURE__ */ _jsxC(Slot, null, 3, "2u_1")
    ],
    onClick$: /* @__PURE__ */ inlinedQrl(() => {
      const [context2] = useLexicalScope();
      context2.currentIndexSig.value++;
      context2.transitionDurationSig.value = 625;
    }, "CarouselNext_component_button_onClick_cDvHfoPP03g", [
      context
    ])
  }, {
    "aria-disabled": _fnSignal((p0) => p0.currentIndexSig.value + 1 === p0.numSlidesSig.value, [
      context
    ], "p0.currentIndexSig.value+1===p0.numSlidesSig.value"),
    disabled: _fnSignal((p0) => p0.currentIndexSig.value + 1 === p0.numSlidesSig.value, [
      context
    ], "p0.currentIndexSig.value+1===p0.numSlidesSig.value")
  }, 0, "2u_2");
}, "CarouselNext_component_U7ZVx09Y0t4"));
export {
  CarouselNext
};
