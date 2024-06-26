"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const keyCode_type = require("../../utils/key-code.type.qwik.cjs");
const getEnabledTab = require("./get-enabled-tab.qwik.cjs");
const tab = require("./tab.qwik.cjs");
const tabPanel = require("./tab-panel.qwik.cjs");
const tabsContextId = require("./tabs-context-id.qwik.cjs");
const tabsList = require("./tabs-list.qwik.cjs");
const Tabs = (props) => {
  qwik._jsxBranch();
  const { children, tabClass, panelClass, tabListComponent: UserTabList, tabComponent: UserTab, tabPanelComponent: UserTabPanel, ...rest } = props;
  const TabList = UserTabList ? UserTabList : tabsList.TabList;
  const Tab = UserTab ? UserTab : tab.Tab;
  const TabPanel = UserTabPanel ? UserTabPanel : tabPanel.TabPanel;
  const childrenToProcess = Array.isArray(children) ? [
    ...children
  ] : [
    children
  ];
  let tabListComponent;
  const tabComponents = [];
  const panelComponents = [];
  const tabInfoList = [];
  let panelIndex = 0;
  let selectedIndex;
  while (childrenToProcess.length) {
    const child = childrenToProcess.shift();
    if (!child)
      continue;
    if (Array.isArray(child)) {
      childrenToProcess.unshift(...child);
      continue;
    }
    switch (child.type) {
      case TabList: {
        tabListComponent = child;
        const tabListChildren = Array.isArray(child.props.children) ? child.props.children : [
          child.props.children
        ];
        childrenToProcess.unshift(...tabListChildren);
        break;
      }
      case Tab:
        if (child.props.selected) {
          const currentTabIndex = tabComponents.length;
          selectedIndex = currentTabIndex;
          child.props.selected = void 0;
        }
        tabComponents.push(child);
        break;
      case TabPanel: {
        const { label, selected } = child.props;
        const matchedTabComponent = tabComponents[panelIndex];
        const tabIdFromTabMaybe = matchedTabComponent?.props.tabId || matchedTabComponent?.key;
        const tabId = tabIdFromTabMaybe || child.key || `${panelIndex}`;
        if (label)
          tabComponents.push(/* @__PURE__ */ qwik._jsxC(Tab, {
            children: label
          }, 1, "rn_0"));
        if (selected) {
          selectedIndex = panelIndex;
          child.props.selected = void 0;
        }
        child.key = tabId;
        child.props._tabId = tabId;
        child.props._extraClass = panelClass;
        panelComponents.push(child);
        tabInfoList.push({
          tabId,
          index: panelIndex,
          tabProps: {},
          panelProps: child.props
        });
        panelIndex++;
        break;
      }
      default:
        console.error(`unhandled component ${child.type} given to Tabs`);
    }
  }
  if (tabComponents.length !== panelIndex)
    console.error(`mismatched number of tabs and panels: ${tabComponents.length} ${panelIndex}`);
  tabComponents.forEach((tab2, index) => {
    const tabId = tabInfoList[index]?.tabId;
    tab2.key = tabId;
    tab2.props.tabId = tabId;
    tab2.props._extraClass = tabClass;
    if (tabInfoList[index].panelProps.disabled !== void 0 && tab2.props.disabled === void 0)
      tab2.props.disabled = tabInfoList[index].panelProps.disabled;
    tabInfoList[index].tabProps = tab2.props;
  });
  if (tabListComponent) {
    tabListComponent.children = tabComponents;
    tabListComponent.props.children = tabComponents;
  } else
    tabListComponent = /* @__PURE__ */ qwik._jsxC(TabList, {
      children: tabComponents
    }, 1, "rn_1");
  if (typeof selectedIndex === "number")
    rest.selectedIndex = selectedIndex;
  return /* @__PURE__ */ qwik._jsxC(TabsImpl, {
    tabInfoList,
    ...rest,
    children: [
      tabListComponent,
      panelComponents
    ]
  }, 0, "rn_2");
};
const TabsImpl = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const {
    // We take these out of the props for the DOM element but we must refer
    // to them as e.g. props.tabs for reactivity
    tabInfoList: _0,
    behavior = "manual",
    selectedTabId: _1,
    selectedIndex: _2,
    vertical,
    selectedClassName,
    onSelectedIndexChange$,
    onSelectedTabIdChange$,
    "bind:selectedIndex": givenIndexSig,
    "bind:selectedTabId": givenTabIdSig,
    ...rest
  } = props;
  const tabsPrefix = qwik.useId();
  const ref = qwik.useSignal();
  const initialSelectedIndexSig = qwik.useSignal();
  const selectedIndexSig = givenIndexSig || initialSelectedIndexSig;
  const initialSelectedTabIdSig = qwik.useSignal();
  const selectedTabIdSig = givenTabIdSig || initialSelectedTabIdSig;
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function syncTabsTask({ track }) {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = qwik.useLexicalScope();
    const tabInfoList = track(() => props2.tabInfoList);
    const tabId = selectedTabIdSig2.value;
    syncSelectedStateSignals(tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      tabIdToSelect: tabId
    }, true);
  }, "TabsImpl_component_useTask_DRQu0Jbom0U", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function syncPropSelectedIndexTask({ track }) {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = qwik.useLexicalScope();
    const updatedIndexFromProps = track(() => props2.selectedIndex);
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      indexToSelect: updatedIndexFromProps
    });
  }, "TabsImpl_component_useTask_1_3qfOoRgTLX0", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function syncSelectedIndexSigTask({ track }) {
    const [onSelectedIndexChange$2, props2, selectedIndexSig2, selectedTabIdSig2] = qwik.useLexicalScope();
    const updatedIndexSignal = track(() => selectedIndexSig2.value);
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      indexToSelect: updatedIndexSignal
    });
    if (typeof selectedIndexSig2.value !== "undefined")
      onSelectedIndexChange$2?.(selectedIndexSig2.value);
  }, "TabsImpl_component_useTask_2_1MEsGrDxaZE", [
    onSelectedIndexChange$,
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function syncPropSelectedTabIdTask({ track }) {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = qwik.useLexicalScope();
    const updatedTabIdFromProps = track(() => props2.selectedTabId);
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      tabIdToSelect: updatedTabIdFromProps
    });
  }, "TabsImpl_component_useTask_3_IOOrEo8hX0M", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function syncSelectedTabIdSigTask({ track }) {
    const [onSelectedTabIdChange$2, props2, selectedIndexSig2, selectedTabIdSig2] = qwik.useLexicalScope();
    let updatedTabId = track(() => selectedTabIdSig2.value);
    if (typeof updatedTabId !== "string") {
      const tab2 = getEnabledTab.getEnabledTab(props2.tabInfoList, 0);
      if (tab2)
        updatedTabId = tab2.tabId;
    }
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      tabIdToSelect: updatedTabId
    });
    if (typeof selectedTabIdSig2.value !== "undefined")
      onSelectedTabIdChange$2?.(selectedTabIdSig2.value);
  }, "TabsImpl_component_useTask_4_Rd7p7Vc3rH8", [
    onSelectedTabIdChange$,
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function callOnSelectedChangeTask({ track }) {
    const [onSelectedIndexChange$2, selectedIndexSig2] = qwik.useLexicalScope();
    if (!onSelectedIndexChange$2)
      return;
    const idx = track(() => selectedIndexSig2.value);
    if (typeof idx === "number" && idx >= 0)
      onSelectedIndexChange$2(idx);
  }, "TabsImpl_component_useTask_5_oM2hVRIf6E0", [
    onSelectedIndexChange$,
    selectedIndexSig
  ]));
  const selectTab$ = /* @__PURE__ */ qwik.inlinedQrl((tabId) => {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = qwik.useLexicalScope();
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      tabIdToSelect: tabId
    });
  }, "TabsImpl_component_selectTab_cwE6GL4xeRw", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]);
  const selectIfAutomatic$ = /* @__PURE__ */ qwik.inlinedQrl((tabId) => {
    const [behavior2, selectTab$2] = qwik.useLexicalScope();
    if (behavior2 === "automatic")
      selectTab$2(tabId);
  }, "TabsImpl_component_selectIfAutomatic_sRcUD5NzKzg", [
    behavior,
    selectTab$
  ]);
  const onTabKeyDown$ = /* @__PURE__ */ qwik.inlinedQrl((key, currentTabId) => {
    const [props2, ref2, vertical2] = qwik.useLexicalScope();
    const tabsRootElement = ref2.value;
    const currentFocusedTabIndex = props2.tabInfoList.findIndex((tabData) => tabData.tabId === currentTabId);
    let tabInfo;
    if (!vertical2 && key === keyCode_type.KeyCode.ArrowRight || vertical2 && key === keyCode_type.KeyCode.ArrowDown)
      tabInfo = getEnabledTab.findNextEnabledTab(props2.tabInfoList, currentFocusedTabIndex + 1, {
        wrap: true
      });
    else if (!vertical2 && key === keyCode_type.KeyCode.ArrowLeft || vertical2 && key === keyCode_type.KeyCode.ArrowUp)
      tabInfo = getEnabledTab.findPrevEnabledTab(props2.tabInfoList, currentFocusedTabIndex, {
        wrap: true
      });
    else if (key === keyCode_type.KeyCode.Home || key === keyCode_type.KeyCode.PageUp)
      tabInfo = getEnabledTab.findNextEnabledTab(props2.tabInfoList, 0);
    else if (key === keyCode_type.KeyCode.End || key === keyCode_type.KeyCode.PageDown)
      tabInfo = getEnabledTab.findPrevEnabledTab(props2.tabInfoList, props2.tabInfoList.length);
    if (tabInfo)
      focusOnTab(tabInfo.index);
    function focusOnTab(index) {
      const tabListElement = tabsRootElement?.children[0];
      const tabToFocusOn = tabListElement?.children[index];
      tabToFocusOn.focus();
    }
  }, "TabsImpl_component_onTabKeyDown_gfqrYYsBodA", [
    props,
    ref,
    vertical
  ]);
  const contextService = {
    selectTab$,
    tabsPrefix,
    onTabKeyDown$,
    selectIfAutomatic$,
    selectedTabIdSig,
    selectedClassName
  };
  qwik.useContextProvider(tabsContextId.tabsContextId, contextService);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref,
    ...rest,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "rn_3")
  }, null, 0, "rn_4");
}, "TabsImpl_component_a60wGPP8byw"));
const syncSelectedStateSignals = (tabsInfoList, selectedIndexSig, selectedTabIdSig, { indexToSelect, tabIdToSelect }, ignoreIndexNotFound) => {
  if (tabIdToSelect)
    indexToSelect = tabsInfoList.findIndex((tabInfo) => tabInfo.tabId === tabIdToSelect);
  if (typeof indexToSelect !== "number")
    return;
  if (indexToSelect && indexToSelect < 0) {
    if (!ignoreIndexNotFound)
      return;
    indexToSelect = selectedIndexSig.value;
    if (typeof indexToSelect !== "number")
      return;
  }
  const tab2 = getEnabledTab.getEnabledTab(tabsInfoList, indexToSelect);
  if (tab2 && (tab2.index !== selectedIndexSig.value || tab2.tabId !== selectedTabIdSig.value)) {
    selectedIndexSig.value = tab2.index;
    selectedTabIdSig.value = tab2.tabId;
  }
};
exports.Tabs = Tabs;
exports.TabsImpl = TabsImpl;
exports.syncSelectedStateSignals = syncSelectedStateSignals;
