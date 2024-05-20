import { type QRL, type Signal, PropsOf } from '@builder.io/qwik';
import type { Option } from './combobox-context.type';
export type ResolvedOption<O extends Option = Option, ValueKey extends string = 'value'> = {
    option: O;
    key: number;
    value: O extends Record<string, unknown> ? O[ValueKey] : O;
    label: string;
    disabled: boolean;
    lcLabel?: string;
};
export type ComboboxProps<O extends Option = Option> = PropsOf<'div'> & {
    options: O[];
    filter$?: QRL<(labelInput: string, options: ResolvedOption<O>[]) => ResolvedOption<O>[]>;
    optionValueKey?: string;
    optionLabelKey?: string;
    optionDisabledKey?: string;
    defaultLabel?: string;
    'bind:isListboxOpen'?: Signal<boolean | undefined>;
    'bind:isInputFocused'?: Signal<boolean | undefined>;
    'bind:inputValue'?: Signal<string>;
    'bind:highlightedIndex'?: Signal<number>;
    'bind:selectedIndex'?: Signal<number>;
};
export declare const Combobox: <O extends Option = Option>(props: import("@builder.io/qwik").PublicProps<ComboboxProps<O>>, key: string | null, flags: number, dev?: import("@builder.io/qwik").DevJSX | undefined) => import("@builder.io/qwik").JSXOutput;
