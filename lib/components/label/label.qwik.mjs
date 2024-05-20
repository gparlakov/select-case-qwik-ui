import { componentQrl, inlinedQrl, _qrlSync, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
const Label = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const handleMouseDownSync$ = _qrlSync((event) => {
    if (!event.defaultPrevented && event.detail > 1)
      event.preventDefault();
  }, "event=>{if(!event.defaultPrevented&&event.detail>1)event.preventDefault();}");
  const handleMouseDown$ = /* @__PURE__ */ inlinedQrl((event) => {
    const target = event.target;
    if (target.closest("button, input, select, textarea"))
      return;
  }, "Label_component_handleMouseDown_6YNIz0Okicc");
  return /* @__PURE__ */ _jsxS("label", {
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "09_0"),
    onMouseDown$: [
      handleMouseDownSync$,
      handleMouseDown$,
      props.onMouseDown$
    ]
  }, null, 0, "09_1");
}, "Label_component_NLbBGZJnC0I"));
export {
  Label
};
