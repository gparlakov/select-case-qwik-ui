import { PropsOf } from '@builder.io/qwik';
type HeadingUnion = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type AccordionHeaderProps = PropsOf<HeadingUnion> & {
    as?: HeadingUnion;
};
export declare const AccordionHeader: import("@builder.io/qwik").Component<AccordionHeaderProps>;
export {};
