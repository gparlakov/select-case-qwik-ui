import { _jsxBranch, _jsxC, componentQrl, inlinedQrl, useId, useSignal, useTaskQrl, useLexicalScope, useContextProvider, _jsxS, Slot } from "@builder.io/qwik";
import { KeyCode } from "../../utils/key-code.type.qwik.mjs";
import { getEnabledTab, findNextEnabledTab, findPrevEnabledTab } from "./get-enabled-tab.qwik.mjs";
import { Tab } from "./tab.qwik.mjs";
import { TabPanel } from "./tab-panel.qwik.mjs";
import { tabsContextId } from "./tabs-context-id.qwik.mjs";
import { TabList } from "./tabs-list.qwik.mjs";
const Tabs = (props) => {
  _jsxBranch();
  const { children, tabClass, panelClass, tabListComponent: UserTabList, tabComponent: UserTab, tabPanelComponent: UserTabPanel, ...rest } = props;
  const TabList$1 = UserTabList ? UserTabList : TabList;
  const Tab$1 = UserTab ? UserTab : Tab;
  const TabPanel$1 = UserTabPanel ? UserTabPanel : TabPanel;
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
      case TabList$1: {
        tabListComponent = child;
        const tabListChildren = Array.isArray(child.props.children) ? child.props.children : [
          child.props.children
        ];
        childrenToProcess.unshift(...tabListChildren);
        break;
      }
      case Tab$1:
        if (child.props.selected) {
          const currentTabIndex = tabComponents.length;
          selectedIndex = currentTabIndex;
          child.props.selected = void 0;
        }
        tabComponents.push(child);
        break;
      case TabPanel$1: {
        const { label, selected } = child.props;
        const matchedTabComponent = tabComponents[panelIndex];
        const tabIdFromTabMaybe = matchedTabComponent?.props.tabId || matchedTabComponent?.key;
        const tabId = tabIdFromTabMaybe || child.key || `${panelIndex}`;
        if (label)
          tabComponents.push(/* @__PURE__ */ _jsxC(Tab$1, {
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
  tabComponents.forEach((tab, index) => {
    const tabId = tabInfoList[index]?.tabId;
    tab.key = tabId;
    tab.props.tabId = tabId;
    tab.props._extraClass = tabClass;
    if (tabInfoList[index].panelProps.disabled !== void 0 && tab.props.disabled === void 0)
      tab.props.disabled = tabInfoList[index].panelProps.disabled;
    tabInfoList[index].tabProps = tab.props;
  });
  if (tabListComponent) {
    tabListComponent.children = tabComponents;
    tabListComponent.props.children = tabComponents;
  } else
    tabListComponent = /* @__PURE__ */ _jsxC(TabList$1, {
      children: tabComponents
    }, 1, "rn_1");
  if (typeof selectedIndex === "number")
    rest.selectedIndex = selectedIndex;
  return /* @__PURE__ */ _jsxC(TabsImpl, {
    tabInfoList,
    ...rest,
    children: [
      tabListComponent,
      panelComponents
    ]
  }, 0, "rn_2");
};
const TabsImpl = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
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
  const tabsPrefix = useId();
  const ref = useSignal();
  const initialSelectedIndexSig = useSignal();
  const selectedIndexSig = givenIndexSig || initialSelectedIndexSig;
  const initialSelectedTabIdSig = useSignal();
  const selectedTabIdSig = givenTabIdSig || initialSelectedTabIdSig;
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function syncTabsTask({ track }) {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = useLexicalScope();
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function syncPropSelectedIndexTask({ track }) {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = useLexicalScope();
    const updatedIndexFromProps = track(() => props2.selectedIndex);
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      indexToSelect: updatedIndexFromProps
    });
  }, "TabsImpl_component_useTask_1_3qfOoRgTLX0", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function syncSelectedIndexSigTask({ track }) {
    const [onSelectedIndexChange$2, props2, selectedIndexSig2, selectedTabIdSig2] = useLexicalScope();
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function syncPropSelectedTabIdTask({ track }) {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = useLexicalScope();
    const updatedTabIdFromProps = track(() => props2.selectedTabId);
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      tabIdToSelect: updatedTabIdFromProps
    });
  }, "TabsImpl_component_useTask_3_IOOrEo8hX0M", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function syncSelectedTabIdSigTask({ track }) {
    const [onSelectedTabIdChange$2, props2, selectedIndexSig2, selectedTabIdSig2] = useLexicalScope();
    let updatedTabId = track(() => selectedTabIdSig2.value);
    if (typeof updatedTabId !== "string") {
      const tab = getEnabledTab(props2.tabInfoList, 0);
      if (tab)
        updatedTabId = tab.tabId;
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function callOnSelectedChangeTask({ track }) {
    const [onSelectedIndexChange$2, selectedIndexSig2] = useLexicalScope();
    if (!onSelectedIndexChange$2)
      return;
    const idx = track(() => selectedIndexSig2.value);
    if (typeof idx === "number" && idx >= 0)
      onSelectedIndexChange$2(idx);
  }, "TabsImpl_component_useTask_5_oM2hVRIf6E0", [
    onSelectedIndexChange$,
    selectedIndexSig
  ]));
  const selectTab$ = /* @__PURE__ */ inlinedQrl((tabId) => {
    const [props2, selectedIndexSig2, selectedTabIdSig2] = useLexicalScope();
    syncSelectedStateSignals(props2.tabInfoList, selectedIndexSig2, selectedTabIdSig2, {
      tabIdToSelect: tabId
    });
  }, "TabsImpl_component_selectTab_cwE6GL4xeRw", [
    props,
    selectedIndexSig,
    selectedTabIdSig
  ]);
  const selectIfAutomatic$ = /* @__PURE__ */ inlinedQrl((tabId) => {
    const [behavior2, selectTab$2] = useLexicalScope();
    if (behavior2 === "automatic")
      selectTab$2(tabId);
  }, "TabsImpl_component_selectIfAutomatic_sRcUD5NzKzg", [
    behavior,
    selectTab$
  ]);
  const onTabKeyDown$ = /* @__PURE__ */ inlinedQrl((key, currentTabId) => {
    const [props2, ref2, vertical2] = useLexicalScope();
    const tabsRootElement = ref2.value;
    const currentFocusedTabIndex = props2.tabInfoList.findIndex((tabData) => tabData.tabId === currentTabId);
    let tabInfo;
    if (!vertical2 && key === KeyCode.ArrowRight || vertical2 && key === KeyCode.ArrowDown)
      tabInfo = findNextEnabledTab(props2.tabInfoList, currentFocusedTabIndex + 1, {
        wrap: true
      });
    else if (!vertical2 && key === KeyCode.ArrowLeft || vertical2 && key === KeyCode.ArrowUp)
      tabInfo = findPrevEnabledTab(props2.tabInfoList, currentFocusedTabIndex, {
        wrap: true
      });
    else if (key === KeyCode.Home || key === KeyCode.PageUp)
      tabInfo = findNextEnabledTab(props2.tabInfoList, 0);
    else if (key === KeyCode.End || key === KeyCode.PageDown)
      tabInfo = findPrevEnabledTab(props2.tabInfoList, props2.tabInfoList.length);
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
  useContextProvider(tabsContextId, contextService);
  return /* @__PURE__ */ _jsxS("div", {
    ref,
    ...rest,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "rn_3")
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
  const tab = getEnabledTab(tabsInfoList, indexToSelect);
  if (tab && (tab.index !== selectedIndexSig.value || tab.tabId !== selectedTabIdSig.value)) {
    selectedIndexSig.value = tab.index;
    selectedTabIdSig.value = tab.tabId;
  }
};
export {
  Tabs,
  TabsImpl,
  syncSelectedStateSignals
};
