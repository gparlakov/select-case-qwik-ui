import { componentQrl, inlinedQrl, _jsxBranch, _restProps, _jsxQ, _jsxC, Slot, _jsxS, _IMMUTABLE } from "@builder.io/qwik";
import { VisuallyHidden } from "../../utils/visually-hidden.qwik.mjs";
const ComboboxIcon = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  _jsxBranch();
  const iconProps = _restProps(props, [
    "svg"
  ]);
  if (props.svg)
    return /* @__PURE__ */ _jsxQ("div", null, {
      "aria-hidden": "true"
    }, /* @__PURE__ */ _jsxC(Slot, null, 3, "0c_0"), 1, "0c_1");
  return !props.svg ? /* @__PURE__ */ _jsxQ("div", null, null, [
    /* @__PURE__ */ _jsxC(VisuallyHidden, {
      children: "Listbox Trigger Icon"
    }, 3, "0c_2"),
    /* @__PURE__ */ _jsxS("svg", {
      ...iconProps,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-width": "2",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
      children: /* @__PURE__ */ _jsxQ("polyline", null, {
        points: "6 9 12 15 18 9"
      }, null, 3, null)
    }, {
      xmlns: _IMMUTABLE,
      viewBox: _IMMUTABLE,
      fill: _IMMUTABLE,
      "stroke-linecap": _IMMUTABLE,
      "stroke-width": _IMMUTABLE,
      "stroke-linejoin": _IMMUTABLE,
      "aria-hidden": _IMMUTABLE
    }, 0, null)
  ], 1, "0c_3") : null;
}, "ComboboxIcon_component_RSXAtm7yh0M"));
export {
  ComboboxIcon
};
