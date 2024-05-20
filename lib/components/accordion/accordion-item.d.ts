import { JSXChildren, PropsOf } from '@builder.io/qwik';
export type AccordionItemProps = PropsOf<'div'> & {
    defaultValue?: boolean;
    label?: string | JSXChildren;
};
export declare const AccordionItem: import("@builder.io/qwik").Component<AccordionItemProps>;
