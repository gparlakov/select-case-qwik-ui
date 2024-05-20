import { componentQrl, inlinedQrl, useContext, _jsxS, _jsxC, Slot, _fnSignal } from "@builder.io/qwik";
import { groupContextId } from "./select-context.qwik.mjs";
const SelectGroupLabel = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const groupContext = useContext(groupContextId);
  return /* @__PURE__ */ _jsxS("li", {
    get id() {
      return groupContext.groupLabelId;
    },
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Lf_0")
  }, {
    id: _fnSignal((p0) => p0.groupLabelId, [
      groupContext
    ], "p0.groupLabelId")
  }, 0, "Lf_1");
}, "SelectGroupLabel_component_wOj7hR8serU"));
export {
  SelectGroupLabel
};
