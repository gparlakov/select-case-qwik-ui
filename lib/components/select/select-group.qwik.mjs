import { componentQrl, inlinedQrl, useContext, useContextProvider, _jsxS, _jsxC, Slot, _IMMUTABLE } from "@builder.io/qwik";
import SelectContextId, { groupContextId } from "./select-context.qwik.mjs";
const SelectGroup = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(SelectContextId);
  const groupLabelId = `${context.localId}-group-label`;
  const groupContext = {
    groupLabelId
  };
  useContextProvider(groupContextId, groupContext);
  return /* @__PURE__ */ _jsxS("div", {
    "aria-labelledby": groupLabelId,
    role: "group",
    ...props,
    ref: context.groupRef,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "3G_0")
  }, {
    role: _IMMUTABLE
  }, 0, "3G_1");
}, "SelectGroup_component_znniKb6Pxg4"));
export {
  SelectGroup
};
