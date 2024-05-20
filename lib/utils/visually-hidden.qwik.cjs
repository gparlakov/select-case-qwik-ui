"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const VisuallyHidden = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useStylesScopedQrl(/* @__PURE__ */ qwik.inlinedQrl(`
  
  .visually-hidden:not(:focus):not(:active) {
      /* shrink to a 1px square */
      width: 1px;
      height: 1px;
  
      /* hide any resulting overflow */
      overflow: hidden;
  
      /* clip the element to remove any visual trace */
      clip: rect(0 0 0 0); /* for IE only */
      clip-path: inset(50%);
  
      /* remove from page flow so it doesn't affect surrounding layout */
      position: absolute;
  
      /* ensure proper text announcement by screen readers */
      white-space: nowrap;  
  }
`, "VisuallyHidden_component_useStylesScoped_01S4PqMGsHg"));
  return /* @__PURE__ */ qwik._jsxQ("span", null, {
    class: "visually-hidden"
  }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "MG_0"), 1, "MG_1");
}, "VisuallyHidden_component_Rc0kDSaaXcs"));
exports.VisuallyHidden = VisuallyHidden;
