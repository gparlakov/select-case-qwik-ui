import { PropsOf } from '@builder.io/qwik';
type PopoverTriggerProps = {
    popovertarget?: string;
    disableClickInitPopover?: boolean;
} & PropsOf<'button'>;
export declare function usePopover(customId?: string): {
    showPopover: import("@builder.io/qwik").QRL<() => Promise<void>>;
    togglePopover: import("@builder.io/qwik").QRL<() => Promise<void>>;
    hidePopover: import("@builder.io/qwik").QRL<() => Promise<void>>;
    initPopover$: import("@builder.io/qwik").QRL<() => Promise<HTMLElement | null>>;
    hasPolyfillLoadedSig: import("@builder.io/qwik").Signal<boolean>;
    isSupportedSig: import("@builder.io/qwik").Signal<boolean>;
};
export declare const PopoverTrigger: import("@builder.io/qwik").Component<PopoverTriggerProps>;
export {};
