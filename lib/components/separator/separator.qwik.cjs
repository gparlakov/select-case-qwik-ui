"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const ORIENTATIONS = [
  "horizontal",
  "vertical"
];
const Separator = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "orientation",
    "decorative"
  ]);
  const orientation = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [props2] = qwik.useLexicalScope();
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
  const ariaOrientation = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [orientation2] = qwik.useLexicalScope();
    return orientation2.value === "vertical" ? orientation2.value : void 0;
  }, "Separator_component_ariaOrientation_useComputed_bwyDZh1KsOA", [
    orientation
  ]));
  const semanticProps = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [ariaOrientation2, props2] = qwik.useLexicalScope();
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
  return /* @__PURE__ */ qwik._jsxS("div", {
    get "data-orientation"() {
      return orientation.value;
    },
    ...semanticProps.value,
    ...props1
  }, {
    "data-orientation": qwik._fnSignal((p0) => p0.value, [
      orientation
    ], "p0.value")
  }, 0, "RC_0");
}, "Separator_component_Zmfz19JSk0g"));
exports.Separator = Separator;
exports._auto_ORIENTATIONS = ORIENTATIONS;
