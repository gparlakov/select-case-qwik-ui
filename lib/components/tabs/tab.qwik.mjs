import { componentQrl, inlinedQrl, _restProps, useContext, useSignal, useComputedQrl, useLexicalScope, _jsxS, _wrapSignal, _jsxC, Slot, _qrlSync, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { TAB_PANEL_ID_PREFIX } from "./tab-panel.qwik.mjs";
import { tabsContextId } from "./tabs-context-id.qwik.mjs";
const TAB_ID_PREFIX = "_tab_";
const Tab = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "selectedClassName",
    "tabId"
  ]);
  const contextService = useContext(tabsContextId);
  const elementRefSig = useSignal();
  const fullTabElementId = contextService.tabsPrefix + TAB_ID_PREFIX + props.tabId;
  const fullPanelElementId = contextService.tabsPrefix + TAB_PANEL_ID_PREFIX + props.tabId;
  const selectedClassNameSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [contextService2, props2] = useLexicalScope();
    return props2.selectedClassName || contextService2.selectedClassName;
  }, "Tab_component_selectedClassNameSig_useComputed_UdeJy0VXnIg", [
    contextService,
    props
  ]));
  const isSelectedSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [contextService2, props2] = useLexicalScope();
    return contextService2.selectedTabIdSig.value === props2.tabId;
  }, "Tab_component_isSelectedSig_useComputed_3jHMInufxPM", [
    contextService,
    props
  ]));
  const selectIfAutomatic$ = /* @__PURE__ */ inlinedQrl(() => {
    const [contextService2, props2] = useLexicalScope();
    contextService2.selectIfAutomatic$(props2.tabId);
  }, "Tab_component_selectIfAutomatic_2VQj8wuI0xc", [
    contextService,
    props
  ]);
  const classNamesSig = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [isSelectedSig2, selectedClassNameSig2] = useLexicalScope();
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
  return /* @__PURE__ */ _jsxS("button", {
    ...props1,
    type: "button",
    role: "tab",
    id: fullTabElementId,
    "aria-controls": fullPanelElementId,
    ref: elementRefSig,
    get "aria-disabled"() {
      return props1.disabled;
    },
    "aria-disabled": _wrapSignal(props1, "disabled"),
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
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "S1_0"),
    onFocus$: [
      selectIfAutomatic$,
      props1.onFocus$
    ],
    onMouseEnter$: [
      selectIfAutomatic$,
      props1.onMouseEnter$
    ],
    onClick$: [
      /* @__PURE__ */ inlinedQrl(() => {
        const [contextService2, props2] = useLexicalScope();
        return contextService2.selectTab$(props2.tabId);
      }, "Tab_component_button_onClick_ptMzd08OGxA", [
        contextService,
        props
      ]),
      props1.onClick$
    ],
    onKeyDown$: [
      _qrlSync((e) => {
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
      /* @__PURE__ */ inlinedQrl((e) => {
        const [contextService2, props2] = useLexicalScope();
        return contextService2.onTabKeyDown$(e.key, props2.tabId);
      }, "Tab_component_button_onKeyDown_LSREfNUdDWs", [
        contextService,
        props
      ]),
      props1.onKeyDown$
    ]
  }, {
    type: _IMMUTABLE,
    role: _IMMUTABLE,
    "data-state": _fnSignal((p0) => p0.value ? "selected" : "unselected", [
      isSelectedSig
    ], 'p0.value?"selected":"unselected"'),
    "aria-selected": _fnSignal((p0) => p0.value, [
      isSelectedSig
    ], "p0.value"),
    tabIndex: _fnSignal((p0) => p0.value ? 0 : -1, [
      isSelectedSig
    ], "p0.value?0:-1")
  }, 0, "S1_1");
}, "Tab_component_kvNVNrTcyeA"));
export {
  TAB_ID_PREFIX,
  Tab
};
