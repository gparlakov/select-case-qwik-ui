import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot, useLexicalScope, _fnSignal } from "@builder.io/qwik";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const CarouselPrev = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(CarouselContextId);
  return /* @__PURE__ */ _jsxS("button", {
    ...props,
    get "aria-disabled"() {
      return context.currentIndexSig.value === 0;
    },
    get disabled() {
      return context.currentIndexSig.value === 0;
    },
    children: [
      /* @__PURE__ */ _jsxC(VisuallyHidden, {
        children: "previous slide"
      }, 3, "d7_0"),
      /* @__PURE__ */ _jsxC(Slot, null, 3, "d7_1")
    ],
    onClick$: /* @__PURE__ */ inlinedQrl(() => {
      const [context2] = useLexicalScope();
      context2.currentIndexSig.value--;
      context2.transitionDurationSig.value = 625;
    }, "CarouselPrev_component_button_onClick_h8L7AyihzWw", [
      context
    ])
  }, {
    "aria-disabled": _fnSignal((p0) => p0.currentIndexSig.value === 0, [
      context
    ], "p0.currentIndexSig.value===0"),
    disabled: _fnSignal((p0) => p0.currentIndexSig.value === 0, [
      context
    ], "p0.currentIndexSig.value===0")
  }, 0, "d7_2");
}, "CarouselPrev_component_8PV4YZXJ7mE"));
export {
  CarouselPrev
};
