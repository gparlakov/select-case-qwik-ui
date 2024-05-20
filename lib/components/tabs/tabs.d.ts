import { PropsOf, Signal, type FunctionComponent } from '@builder.io/qwik';
import { Behavior } from './behavior.type';
import { Tab as InternalTab, TabProps } from './tab';
import { TabPanel as InternalTabPanel, TabPanelProps } from './tab-panel';
import { TabList as InternalTabList } from './tabs-list';
/**
 * TABS TODOs

 *
* aria Tabs Pattern https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 * a11y lint plugin https://www.npmjs.com/package/eslint-plugin-jsx-a11y

* POST Beta
  * Add automated tests for preventDefault on end, home,  pageDown, pageUp

* POST V1:
 * - RTL
 *  NOTE: scrolling support? or multiple lines? (probably not for headless but for tailwind / material )
 * Add ability to close tabs with an ❌ icon (and keyboard support)

* TO DISCUSS
 - name of the components, e.g. Tabs, Tabs.Trigger, Tabs.Panel
 - selectedClassname => selectedClass
 - do we keep all current props (tabId callbacks?)
 - shorthand for tab: "label" or "tab"?
 - the TODOs
  *
 */
export type TabsProps = PropsOf<'div'> & {
    behavior?: Behavior;
    selectedTabId?: string;
    selectedIndex?: number;
    vertical?: boolean;
    selectedClassName?: string;
    onSelectedIndexChange$?: (index: number) => void;
    onSelectedTabIdChange$?: (tabId: string) => void;
    'bind:selectedIndex'?: Signal<number | undefined>;
    'bind:selectedTabId'?: Signal<string | undefined>;
    tabClass?: PropsOf<'div'>['class'];
    panelClass?: PropsOf<'div'>['class'];
    tabListComponent?: typeof InternalTabList;
    tabComponent?: typeof InternalTab;
    tabPanelComponent?: typeof InternalTabPanel;
};
export type TabInfo = {
    tabId: string;
    index: number;
    tabProps: TabProps;
    panelProps: TabPanelProps;
};
export declare const Tabs: FunctionComponent<TabsProps>;
export declare const TabsImpl: import("@builder.io/qwik").Component<{
    align?: string | undefined;
} & import("@builder.io/qwik").HTMLElementAttrs & import("@builder.io/qwik").QwikAttributes<HTMLDivElement> & {
    behavior?: Behavior | undefined;
    selectedTabId?: string | undefined;
    selectedIndex?: number | undefined;
    vertical?: boolean | undefined;
    selectedClassName?: string | undefined;
    onSelectedIndexChange$?: ((index: number) => void) | undefined;
    onSelectedTabIdChange$?: ((tabId: string) => void) | undefined;
    'bind:selectedIndex'?: Signal<number | undefined> | undefined;
    'bind:selectedTabId'?: Signal<string | undefined> | undefined;
    tabClass?: PropsOf<'div'>['class'];
    panelClass?: PropsOf<'div'>['class'];
    tabListComponent?: import("@builder.io/qwik").Component<{
        align?: string | undefined;
    } & import("@builder.io/qwik").HTMLElementAttrs & import("@builder.io/qwik").QwikAttributes<HTMLDivElement>> | undefined;
    tabComponent?: import("@builder.io/qwik").Component<TabProps> | undefined;
    tabPanelComponent?: import("@builder.io/qwik").Component<TabPanelProps> | undefined;
} & {
    tabInfoList: TabInfo[];
}>;
export declare const syncSelectedStateSignals: (tabsInfoList: TabInfo[], selectedIndexSig: Signal<number | undefined>, selectedTabIdSig: Signal<string | undefined>, { indexToSelect, tabIdToSelect }: {
    indexToSelect?: number | undefined;
    tabIdToSelect?: string | undefined;
}, ignoreIndexNotFound?: boolean) => void;
