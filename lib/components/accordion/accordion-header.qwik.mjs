import { componentQrl, inlinedQrl, _restProps, useContext, _jsxC, Slot } from "@builder.io/qwik";
import { accordionItemContextId } from "./accordion-context-id.qwik.mjs";
const AccordionHeader = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "as"
  ]);
  const itemContext = useContext(accordionItemContextId);
  const headerId = `${itemContext.itemId}-header`;
  return /* @__PURE__ */ _jsxC(props.as ?? "h3", {
    id: headerId,
    ...props1,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "ZH_0")
  }, 0, "ZH_1");
}, "AccordionHeader_component_rXsqhlJRPNU"));
export {
  AccordionHeader
};
