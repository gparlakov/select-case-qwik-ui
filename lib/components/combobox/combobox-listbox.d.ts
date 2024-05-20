import { QRL, PropsOf } from '@builder.io/qwik';
import { JSX } from '@builder.io/qwik/jsx-runtime';
import type { Option } from './combobox-context.type';
import { ResolvedOption } from './combobox';
export type ComboboxListboxProps<O extends Option = Option> = PropsOf<'ul'> & {
    optionRenderer$?: QRL<(resolved: ResolvedOption<O>, filteredIndex: number) => JSX.Element>;
};
export declare const ComboboxListbox: <O extends Option = Option>(props: import("@builder.io/qwik").PublicProps<ComboboxListboxProps<O>>, key: string | null, flags: number, dev?: import("@builder.io/qwik").DevJSX | undefined) => import("@builder.io/qwik").JSXOutput;
