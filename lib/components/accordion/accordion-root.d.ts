import { PropsOf, QRL } from '@builder.io/qwik';
export type AccordionRootProps = PropsOf<'div'> & {
    behavior?: 'single' | 'multi';
    animated?: boolean;
    enhance?: boolean;
    collapsible?: boolean;
    onSelectedIndexChange$?: QRL<(index: number) => void>;
    onFocusIndexChange$?: QRL<(index: number) => void>;
};
export declare const AccordionRoot: import("@builder.io/qwik").Component<AccordionRootProps>;
