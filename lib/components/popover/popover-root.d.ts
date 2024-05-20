import { PropsOf, Signal } from '@builder.io/qwik';
export type PopoverRootProps = {
    popover?: 'manual' | 'auto';
    manual?: boolean;
    ref?: Signal<HTMLElement | undefined>;
    floating?: boolean | TPlacement;
    hover?: boolean;
    id?: string;
    'bind:anchor'?: Signal<HTMLElement | undefined>;
};
export type FloatingProps = {
    ancestorScroll?: boolean;
    ancestorResize?: boolean;
    elementResize?: boolean;
    layoutShift?: boolean;
    animationFrame?: boolean;
    gutter?: number;
    shift?: boolean;
    flip?: boolean;
    size?: boolean;
    hide?: 'referenceHidden' | 'escaped';
    inline?: boolean;
    transform?: string;
    arrow?: boolean;
};
export type TPlacement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
export type PopoverProps = PopoverRootProps & {
    floating?: boolean | TPlacement;
} & FloatingProps & PropsOf<'div'>;
export declare const PopoverRoot: import("@builder.io/qwik").Component<PopoverProps>;
