import { componentQrl, inlinedQrl, _restProps, useComputedQrl, useLexicalScope, _jsxS, _fnSignal } from "@builder.io/qwik";
const ORIENTATIONS = [
  "horizontal",
  "vertical"
];
const Separator = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "orientation",
    "decorative"
  ]);
  const orientation = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [props2] = useLexicalScope();
    if (ORIENTATIONS.includes(props2.orientation ?? "horizontal"))
      return props2.orientation ?? "horizontal";
    console.warn(`Invalid prop 'orientation' of value '${props2.orientation ?? "horizontal"}' supplied to 'separator',
        expected one of:
        - horizontal
        - vertical

        Defaulting to 'horizontal'.`);
    return "horizontal";
  }, "Separator_component_orientation_useComputed_q0YZGNqIldM", [
    props
  ]));
  const ariaOrientation = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [orientation2] = useLexicalScope();
    return orientation2.value === "vertical" ? orientation2.value : void 0;
  }, "Separator_component_ariaOrientation_useComputed_bwyDZh1KsOA", [
    orientation
  ]));
  const semanticProps = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [ariaOrientation2, props2] = useLexicalScope();
    return props2.decorative ? {
      role: "none"
    } : {
      role: "separator",
      "aria-orientation": ariaOrientation2.value
    };
  }, "Separator_component_semanticProps_useComputed_jrvwxN1N0Ws", [
    ariaOrientation,
    props
  ]));
  return /* @__PURE__ */ _jsxS("div", {
    get "data-orientation"() {
      return orientation.value;
    },
    ...semanticProps.value,
    ...props1
  }, {
    "data-orientation": _fnSignal((p0) => p0.value, [
      orientation
    ], "p0.value")
  }, 0, "RC_0");
}, "Separator_component_Zmfz19JSk0g"));
export {
  Separator,
  ORIENTATIONS as _auto_ORIENTATIONS
};
