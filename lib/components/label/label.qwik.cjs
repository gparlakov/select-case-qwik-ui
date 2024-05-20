"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const Label = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const handleMouseDownSync$ = qwik._qrlSync((event) => {
    if (!event.defaultPrevented && event.detail > 1)
      event.preventDefault();
  }, "event=>{if(!event.defaultPrevented&&event.detail>1)event.preventDefault();}");
  const handleMouseDown$ = /* @__PURE__ */ qwik.inlinedQrl((event) => {
    const target = event.target;
    if (target.closest("button, input, select, textarea"))
      return;
  }, "Label_component_handleMouseDown_6YNIz0Okicc");
  return /* @__PURE__ */ qwik._jsxS("label", {
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "09_0"),
    onMouseDown$: [
      handleMouseDownSync$,
      handleMouseDown$,
      props.onMouseDown$
    ]
  }, null, 0, "09_1");
}, "Label_component_NLbBGZJnC0I"));
exports.Label = Label;
