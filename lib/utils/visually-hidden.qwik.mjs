import { componentQrl, inlinedQrl, useStylesScopedQrl, _jsxQ, _jsxC, Slot } from "@builder.io/qwik";
const VisuallyHidden = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(`
  
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
  return /* @__PURE__ */ _jsxQ("span", null, {
    class: "visually-hidden"
  }, /* @__PURE__ */ _jsxC(Slot, null, 3, "MG_0"), 1, "MG_1");
}, "VisuallyHidden_component_Rc0kDSaaXcs"));
export {
  VisuallyHidden
};
