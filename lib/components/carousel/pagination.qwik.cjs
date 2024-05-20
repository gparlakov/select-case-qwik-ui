"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const carouselContextId = require("./carousel-context-id.qwik.cjs");
const CarouselPagination = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "renderBullet$"
  ]);
  const context = qwik.useContext(carouselContextId);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ...props1,
    children: Array.from({
      length: context.numSlidesSig.value
    }, (v, i) => i).map((num) => /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
      children: props.renderBullet$ ? props.renderBullet$(num) : /* @__PURE__ */ qwik._jsxS("div", {
        ...props1,
        "aria-current": context.currentIndexSig.value === num,
        "data-current-slide": context.currentIndexSig.value === num,
        children: num
      }, null, 0, num)
    }, 1, "jp_0"))
  }, null, 0, "jp_1");
}, "CarouselPagination_component_loB6FuC6D5c"));
exports.CarouselPagination = CarouselPagination;
