"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const tabPanel = require("./tab-panel.qwik.cjs");
const tabsContextId = require("./tabs-context-id.qwik.cjs");
const TAB_ID_PREFIX = "_tab_";
const Tab = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "selectedClassName",
    "tabId"
  ]);
  const contextService = qwik.useContext(tabsContextId.tabsContextId);
  const elementRefSig = qwik.useSignal();
  const fullTabElementId = contextService.tabsPrefix + TAB_ID_PREFIX + props.tabId;
  const fullPanelElementId = contextService.tabsPrefix + tabPanel.TAB_PANEL_ID_PREFIX + props.tabId;
  const selectedClassNameSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [contextService2, props2] = qwik.useLexicalScope();
    return props2.selectedClassName || contextService2.selectedClassName;
  }, "Tab_component_selectedClassNameSig_useComputed_UdeJy0VXnIg", [
    contextService,
    props
  ]));
  const isSelectedSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [contextService2, props2] = qwik.useLexicalScope();
    return contextService2.selectedTabIdSig.value === props2.tabId;
  }, "Tab_component_isSelectedSig_useComputed_3jHMInufxPM", [
    contextService,
    props
  ]));
  const selectIfAutomatic$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [contextService2, props2] = qwik.useLexicalScope();
    contextService2.selectIfAutomatic$(props2.tabId);
  }, "Tab_component_selectIfAutomatic_2VQj8wuI0xc", [
    contextService,
    props
  ]);
  const classNamesSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [isSelectedSig2, selectedClassNameSig2] = qwik.useLexicalScope();
    return [
      // TODO only given class if selected
      isSelectedSig2.value && [
        "selected",
        selectedClassNameSig2.value
      ]
    ];
  }, "Tab_component_classNamesSig_useComputed_81f91CGaO3Q", [
    isSelectedSig,
    selectedClassNameSig
  ]));
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props1,
    type: "button",
    role: "tab",
    id: fullTabElementId,
    "aria-controls": fullPanelElementId,
    ref: elementRefSig,
    get "aria-disabled"() {
      return props1.disabled;
    },
    "aria-disabled": qwik._wrapSignal(props1, "disabled"),
    get "data-state"() {
      return isSelectedSig.value ? "selected" : "unselected";
    },
    get "aria-selected"() {
      return isSelectedSig.value;
    },
    get tabIndex() {
      return isSelectedSig.value ? 0 : -1;
    },
    class: [
      props1.class,
      classNamesSig.value
    ],
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "S1_0"),
    onFocus$: [
      selectIfAutomatic$,
      props1.onFocus$
    ],
    onMouseEnter$: [
      selectIfAutomatic$,
      props1.onMouseEnter$
    ],
    onClick$: [
      /* @__PURE__ */ qwik.inlinedQrl(() => {
        const [contextService2, props2] = qwik.useLexicalScope();
        return contextService2.selectTab$(props2.tabId);
      }, "Tab_component_button_onClick_ptMzd08OGxA", [
        contextService,
        props
      ]),
      props1.onClick$
    ],
    onKeyDown$: [
      qwik._qrlSync((e) => {
        const keys = [
          "Home",
          "End",
          "PageDown",
          "PageUp",
          "ArrowDown",
          "ArrowUp",
          "ArrowLeft",
          "ArrowRight"
        ];
        if (keys.includes(e.key))
          e.preventDefault();
      }, 'e=>{const keys=["Home","End","PageDown","PageUp","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"];if(keys.includes(e.key)){e.preventDefault();}}'),
      /* @__PURE__ */ qwik.inlinedQrl((e) => {
        const [contextService2, props2] = qwik.useLexicalScope();
        return contextService2.onTabKeyDown$(e.key, props2.tabId);
      }, "Tab_component_button_onKeyDown_LSREfNUdDWs", [
        contextService,
        props
      ]),
      props1.onKeyDown$
    ]
  }, {
    type: qwik._IMMUTABLE,
    role: qwik._IMMUTABLE,
    "data-state": qwik._fnSignal((p0) => p0.value ? "selected" : "unselected", [
      isSelectedSig
    ], 'p0.value?"selected":"unselected"'),
    "aria-selected": qwik._fnSignal((p0) => p0.value, [
      isSelectedSig
    ], "p0.value"),
    tabIndex: qwik._fnSignal((p0) => p0.value ? 0 : -1, [
      isSelectedSig
    ], "p0.value?0:-1")
  }, 0, "S1_1");
}, "Tab_component_kvNVNrTcyeA"));
exports.TAB_ID_PREFIX = TAB_ID_PREFIX;
exports.Tab = Tab;
