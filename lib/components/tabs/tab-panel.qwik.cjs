"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const tab = require("./tab.qwik.cjs");
const tabsContextId = require("./tabs-context-id.qwik.cjs");
const TAB_PANEL_ID_PREFIX = "_tabpanel_";
const TabPanel = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (props) => {
    const props1 = qwik._restProps(props, [
      "label",
      "_tabId",
      "_extraClass"
    ]);
    const contextService = qwik.useContext(tabsContextId.tabsContextId);
    const fullPanelElementId = contextService.tabsPrefix + TAB_PANEL_ID_PREFIX + props._tabId;
    const fullTabElementId = contextService.tabsPrefix + tab.TAB_ID_PREFIX + props._tabId;
    const isSelectedSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
      const [contextService2, props2] = qwik.useLexicalScope();
      return contextService2.selectedTabIdSig.value === props2._tabId;
    }, "TabPanel_component_isSelectedSig_useComputed_8taJSt0x3WU", [
      contextService,
      props
    ]));
    return /* @__PURE__ */ qwik._jsxS("div", {
      ...props1,
      id: fullPanelElementId,
      "aria-labelledby": fullTabElementId,
      role: "tabpanel",
      tabIndex: 0,
      get hidden() {
        return !isSelectedSig.value;
      },
      children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "0X_0")
    }, {
      role: qwik._IMMUTABLE,
      tabIndex: qwik._IMMUTABLE,
      hidden: qwik._fnSignal((p0) => !p0.value, [
        isSelectedSig
      ], "!p0.value")
    }, 0, "0X_1");
  },
  "TabPanel_component_hGvbppnh23w"
));
exports.TAB_PANEL_ID_PREFIX = TAB_PANEL_ID_PREFIX;
exports.TabPanel = TabPanel;
