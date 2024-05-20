import { PropsOf } from '@builder.io/qwik';
import { ResolvedOption } from './combobox';
export type ComboboxOptionProps = PropsOf<'li'> & {
    index: number;
    resolved: ResolvedOption;
};
export declare const ComboboxOption: import("@builder.io/qwik").Component<ComboboxOptionProps>;
