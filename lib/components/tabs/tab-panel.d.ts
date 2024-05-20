import { PropsOf } from '@builder.io/qwik';
export type TabPanelProps = {
    /** Optional tab contents. */
    label?: PropsOf<'div'>['children'];
    selected?: boolean;
    disabled?: boolean;
    /** @deprecated Internal use only */
    _tabId?: string;
    /** @deprecated Internal use only */
    _extraClass?: PropsOf<'div'>['class'];
} & PropsOf<'div'>;
export declare const TAB_PANEL_ID_PREFIX = "_tabpanel_";
export declare const TabPanel: import("@builder.io/qwik").Component<TabPanelProps>;
