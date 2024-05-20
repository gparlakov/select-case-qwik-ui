"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const accordionContextId = require("./accordion-context-id.qwik.cjs");
const AccordionHeader = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "as"
  ]);
  const itemContext = qwik.useContext(accordionContextId.accordionItemContextId);
  const headerId = `${itemContext.itemId}-header`;
  return /* @__PURE__ */ qwik._jsxC(props.as ?? "h3", {
    id: headerId,
    ...props1,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "ZH_0")
  }, 0, "ZH_1");
}, "AccordionHeader_component_rXsqhlJRPNU"));
exports.AccordionHeader = AccordionHeader;
