import { componentQrl, inlinedQrl, _restProps, useContext, useComputedQrl, useLexicalScope, _jsxS, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { TAB_ID_PREFIX } from "./tab.qwik.mjs";
import { tabsContextId } from "./tabs-context-id.qwik.mjs";
const TAB_PANEL_ID_PREFIX = "_tabpanel_";
const TabPanel = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (props) => {
    const props1 = _restProps(props, [
      "label",
      "_tabId",
      "_extraClass"
    ]);
    const contextService = useContext(tabsContextId);
    const fullPanelElementId = contextService.tabsPrefix + TAB_PANEL_ID_PREFIX + props._tabId;
    const fullTabElementId = contextService.tabsPrefix + TAB_ID_PREFIX + props._tabId;
    const isSelectedSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
      const [contextService2, props2] = useLexicalScope();
      return contextService2.selectedTabIdSig.value === props2._tabId;
    }, "TabPanel_component_isSelectedSig_useComputed_8taJSt0x3WU", [
      contextService,
      props
    ]));
    return /* @__PURE__ */ _jsxS("div", {
      ...props1,
      id: fullPanelElementId,
      "aria-labelledby": fullTabElementId,
      role: "tabpanel",
      tabIndex: 0,
      get hidden() {
        return !isSelectedSig.value;
      },
      children: /* @__PURE__ */ _jsxC(Slot, null, 3, "0X_0")
    }, {
      role: _IMMUTABLE,
      tabIndex: _IMMUTABLE,
      hidden: _fnSignal((p0) => !p0.value, [
        isSelectedSig
      ], "!p0.value")
    }, 0, "0X_1");
  },
  "TabPanel_component_hGvbppnh23w"
));
export {
  TAB_PANEL_ID_PREFIX,
  TabPanel
};
