import { PropsOf } from '@builder.io/qwik';
declare const ORIENTATIONS: readonly ["horizontal", "vertical"];
type Orientation = (typeof ORIENTATIONS)[number];
type QwikDiv = PropsOf<'div'>;
export interface SeparatorProps extends QwikDiv {
    /**
     * Either `vertical` or `horizontal`. Defaults to `horizontal`.
     */
    orientation?: Orientation;
    /**
     * If true, accessibility-related attributes
     * are updated so that that the element is not included in the accessibility tree.
     */
    decorative?: boolean;
}
export declare const Separator: import("@builder.io/qwik").Component<SeparatorProps>;
export {};
