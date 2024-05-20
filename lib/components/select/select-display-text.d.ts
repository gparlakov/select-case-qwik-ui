import { type PropsOf } from '@builder.io/qwik';
type SelectValueProps = PropsOf<'span'> & {
    /**
     * Optional text displayed when no option is selected.
     */
    placeholder?: string;
};
export declare const SelectDisplayText: import("@builder.io/qwik").Component<SelectValueProps>;
export {};
