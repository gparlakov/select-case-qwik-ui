import { PropsOf } from '@builder.io/qwik';
import type { Option } from './combobox-context.type';
export type ComboboxInputProps = PropsOf<'input'> & {
    disableOnBlur?: boolean;
};
export declare const ComboboxInput: <O extends Option = Option>(props: import("@builder.io/qwik").PublicProps<ComboboxInputProps>, key: string | null, flags: number, dev?: import("@builder.io/qwik").DevJSX | undefined) => import("@builder.io/qwik").JSXOutput;
