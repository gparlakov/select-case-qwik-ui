import { componentQrl, inlinedQrl, _restProps, useContext, _jsxS, _jsxC } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
import CarouselContextId from "./carousel-context-id.qwik.mjs";
const CarouselPagination = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "renderBullet$"
  ]);
  const context = useContext(CarouselContextId);
  return /* @__PURE__ */ _jsxS("div", {
    ...props1,
    children: Array.from({
      length: context.numSlidesSig.value
    }, (v, i) => i).map((num) => /* @__PURE__ */ _jsxC(Fragment, {
      children: props.renderBullet$ ? props.renderBullet$(num) : /* @__PURE__ */ _jsxS("div", {
        ...props1,
        "aria-current": context.currentIndexSig.value === num,
        "data-current-slide": context.currentIndexSig.value === num,
        children: num
      }, null, 0, num)
    }, 1, "jp_0"))
  }, null, 0, "jp_1");
}, "CarouselPagination_component_loB6FuC6D5c"));
export {
  CarouselPagination
};
