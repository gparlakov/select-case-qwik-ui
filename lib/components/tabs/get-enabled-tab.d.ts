import { type TabInfo } from './tabs';
export declare const getEnabledTab: (tabInfoList: TabInfo[], index: number) => TabInfo | undefined;
export declare function findNextEnabledTab(tabsInfo: TabInfo[], index: number, config?: {
    wrap: boolean;
}): TabInfo | undefined;
export declare function findPrevEnabledTab(tabsInfo: TabInfo[], index: number, config?: {
    wrap: boolean;
}): TabInfo | undefined;
export declare const isDisabled: (tabInfo: TabInfo) => boolean | undefined;
