import { type PropsOf } from '@builder.io/qwik';
export type SelectItemProps = PropsOf<'li'> & {
    /** Internal index we get from the inline component. Please see select-inline.tsx */
    _index?: number;
    /** If true, item is not selectable or focusable. */
    disabled?: boolean;
    /** Selected value associated with the item. */
    value?: string;
};
export declare const SelectItem: import("@builder.io/qwik").Component<SelectItemProps>;
