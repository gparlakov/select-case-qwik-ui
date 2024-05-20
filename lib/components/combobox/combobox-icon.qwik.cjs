"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const visuallyHidden = require("../../utils/visually-hidden.qwik.cjs");
const ComboboxIcon = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const iconProps = qwik._restProps(props, [
    "svg"
  ]);
  if (props.svg)
    return /* @__PURE__ */ qwik._jsxQ("div", null, {
      "aria-hidden": "true"
    }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "0c_0"), 1, "0c_1");
  return !props.svg ? /* @__PURE__ */ qwik._jsxQ("div", null, null, [
    /* @__PURE__ */ qwik._jsxC(visuallyHidden.VisuallyHidden, {
      children: "Listbox Trigger Icon"
    }, 3, "0c_2"),
    /* @__PURE__ */ qwik._jsxS("svg", {
      ...iconProps,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-width": "2",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ qwik._jsxQ("polyline", null, {
        points: "6 9 12 15 18 9"
      }, null, 3, null)
    }, {
      xmlns: qwik._IMMUTABLE,
      viewBox: qwik._IMMUTABLE,
      fill: qwik._IMMUTABLE,
      "stroke-linecap": qwik._IMMUTABLE,
      "stroke-width": qwik._IMMUTABLE,
      "stroke-linejoin": qwik._IMMUTABLE,
      "aria-hidden": qwik._IMMUTABLE
    }, 0, null)
  ], 1, "0c_3") : null;
}, "ComboboxIcon_component_RSXAtm7yh0M"));
exports.ComboboxIcon = ComboboxIcon;
