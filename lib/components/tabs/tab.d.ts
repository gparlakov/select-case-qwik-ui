import { PropsOf } from '@builder.io/qwik';
export declare const TAB_ID_PREFIX = "_tab_";
export type TabProps = PropsOf<'button'> & {
    disabled?: boolean;
    selected?: boolean;
    selectedClassName?: string;
    tabId?: string;
};
export declare const Tab: import("@builder.io/qwik").Component<TabProps>;
