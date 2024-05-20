/**
 * Helper functions go inside of hooks.
 * This is because outside of the component$ boundary Qwik core wakes up.
 */
export declare function useSelect(): {
    getNextEnabledItemIndex$: import("@builder.io/qwik").QRL<(index: number) => number>;
    getPrevEnabledItemIndex$: import("@builder.io/qwik").QRL<(index: number) => number>;
    getActiveDescendant$: import("@builder.io/qwik").QRL<(index: number) => string>;
    selectionManager$: import("@builder.io/qwik").QRL<(index: number | null, action: 'add' | 'toggle' | 'remove') => Promise<void>>;
};
export declare function useTypeahead(): {
    typeahead$: import("@builder.io/qwik").QRL<(key: string) => Promise<void>>;
};
