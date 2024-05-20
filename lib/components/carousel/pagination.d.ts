import { type QRL, type PropsOf } from '@builder.io/qwik';
import { type JSX } from '@builder.io/qwik/jsx-runtime';
type CarouselPaginationProps = PropsOf<'div'> & {
    renderBullet$?: QRL<(n: number) => JSX.Element>;
};
export declare const CarouselPagination: import("@builder.io/qwik").Component<CarouselPaginationProps>;
export {};
