import { Component } from '@builder.io/qwik';
import { type SelectProps } from './select-root';
import { SelectItem as InternalSelectItem } from './select-item';
import { SelectLabel as InternalSelectLabel } from './select-label';
import { SelectItemLabel as InternalSelectItemLabel } from './select-item-label';
type InlineCompProps = {
    selectLabelComponent?: typeof InternalSelectLabel;
    selectItemComponent?: typeof InternalSelectItem;
    selectItemLabelComponent?: typeof InternalSelectItemLabel;
};
export declare const SelectRoot: Component<SelectProps & InlineCompProps>;
export {};
