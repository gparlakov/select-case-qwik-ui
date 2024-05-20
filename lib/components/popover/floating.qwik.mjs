import { componentQrl, inlinedQrl, useContext, useTaskQrl, useLexicalScope, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { PopoverPanelImpl } from "./popover-panel-impl.qwik.mjs";
import { autoUpdate, hide, flip, shift, arrow, computePosition } from "../../node_modules/.pnpm/@floating-ui_dom@1.5.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.qwik.mjs";
import { popoverContextId } from "./popover-context.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
import { offset } from "../../node_modules/.pnpm/@floating-ui_core@1.5.3/node_modules/@floating-ui/core/dist/floating-ui.core.qwik.mjs";
const FloatingPopover = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(popoverContextId);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async ({ track, cleanup }) => {
    const [context2] = useLexicalScope();
    track(() => context2.isOpenSig.value);
    if (isServer)
      return;
    const anchor = context2.anchorRef?.value ? context2.anchorRef.value : context2.triggerRef?.value;
    const popover = context2.panelRef?.value;
    if (!popover || !anchor)
      return;
    const updatePosition = async () => {
      const middleware = [
        offset(context2.gutter),
        hide({
          strategy: context2.hide
        }),
        context2.flip && flip(),
        context2.shift && shift(),
        context2.arrow && arrow({
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
      await computePosition(anchor, popover, {
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
    const cleanupFunc = autoUpdate(anchor, popover, updatePosition, {
      ancestorScroll: context2.ancestorScroll,
      ancestorResize: context2.ancestorResize,
      elementResize: context2.elementResize,
      animationFrame: context2.animationFrame
    });
    cleanup(cleanupFunc);
  }, "FloatingPopover_component_useTask_3gPgBdc9bbg", [
    context
  ]));
  return /* @__PURE__ */ _jsxC(PopoverPanelImpl, {
    get ref() {
      return context.panelRef;
    },
    hidden: true,
    ...props,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Ah_0"),
    [_IMMUTABLE]: {
      ref: _fnSignal((p0) => p0.panelRef, [
        context
      ], "p0.panelRef"),
      hidden: _IMMUTABLE
    }
  }, 0, "Ah_1");
}, "FloatingPopover_component_hot3zByWKzU"));
export {
  FloatingPopover
};
