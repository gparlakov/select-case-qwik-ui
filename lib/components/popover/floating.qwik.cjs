"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const popoverPanelImpl = require("./popover-panel-impl.qwik.cjs");
const floatingUi_dom = require("../../node_modules/.pnpm/@floating-ui_dom@1.5.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.qwik.cjs");
const popoverContext = require("./popover-context.qwik.cjs");
const build = require("@builder.io/qwik/build");
const floatingUi_core = require("../../node_modules/.pnpm/@floating-ui_core@1.5.3/node_modules/@floating-ui/core/dist/floating-ui.core.qwik.cjs");
const FloatingPopover = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(popoverContext.popoverContextId);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async ({ track, cleanup }) => {
    const [context2] = qwik.useLexicalScope();
    track(() => context2.isOpenSig.value);
    if (build.isServer)
      return;
    const anchor = context2.anchorRef?.value ? context2.anchorRef.value : context2.triggerRef?.value;
    const popover = context2.panelRef?.value;
    if (!popover || !anchor)
      return;
    const updatePosition = async () => {
      const middleware = [
        floatingUi_core.offset(context2.gutter),
        floatingUi_dom.hide({
          strategy: context2.hide
        }),
        context2.flip && floatingUi_dom.flip(),
        context2.shift && floatingUi_dom.shift(),
        context2.arrow && floatingUi_dom.arrow({
          padding: 0,
          element: context2.arrowRef?.value
        })
      ];
      let placement;
      if (typeof context2.floating === "boolean")
        placement = "bottom";
      else
        placement = context2.floating;
      if (popover)
        popover.hidden = false;
      await floatingUi_dom.computePosition(anchor, popover, {
        placement,
        middleware
      }).then(async (resolvedData) => {
        const { x, y } = resolvedData;
        Object.assign(popover.style, {
          left: `${x}px`,
          top: `${y}px`,
          transform: context2.transform
        });
        if (resolvedData.middlewareData.arrow && context2.arrowRef?.value) {
          const { x: x2, y: y2 } = resolvedData.middlewareData.arrow;
          Object.assign(context2.arrowRef.value.style, {
            left: x2 != null ? `${x2}px` : "",
            top: y2 != null ? `${y2}px` : ""
          });
        }
      });
    };
    const cleanupFunc = floatingUi_dom.autoUpdate(anchor, popover, updatePosition, {
      ancestorScroll: context2.ancestorScroll,
      ancestorResize: context2.ancestorResize,
      elementResize: context2.elementResize,
      animationFrame: context2.animationFrame
    });
    cleanup(cleanupFunc);
  }, "FloatingPopover_component_useTask_3gPgBdc9bbg", [
    context
  ]));
  return /* @__PURE__ */ qwik._jsxC(popoverPanelImpl.PopoverPanelImpl, {
    get ref() {
      return context.panelRef;
    },
    hidden: true,
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Ah_0"),
    [qwik._IMMUTABLE]: {
      ref: qwik._fnSignal((p0) => p0.panelRef, [
        context
      ], "p0.panelRef"),
      hidden: qwik._IMMUTABLE
    }
  }, 0, "Ah_1");
}, "FloatingPopover_component_hot3zByWKzU"));
exports.FloatingPopover = FloatingPopover;
