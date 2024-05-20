import type { Signal } from '@builder.io/qwik';
import type { ResolvedOption } from './combobox';
export interface ComboboxContext<O extends Option = Option> {
    filteredOptionsSig: Signal<ResolvedOption<O>[]>;
    inputValueSig: Signal<string>;
    localId: string;
    labelRef: Signal<HTMLLabelElement | undefined>;
    listboxRef: Signal<HTMLUListElement | undefined>;
    triggerRef: Signal<HTMLButtonElement | undefined>;
    inputRef: Signal<HTMLInputElement | undefined>;
    popoverRef: Signal<HTMLElement | undefined>;
    defaultLabel?: string;
    isInputFocusedSig: Signal<boolean | undefined>;
    isListboxOpenSig: Signal<boolean | undefined>;
    highlightedIndexSig: Signal<number>;
    selectedIndexSig: Signal<number>;
    optionValueKey: string;
    optionLabelKey: string;
    optionDisabledKey: string;
}
export type Option = string | Record<string, unknown>;
