import { type PropsOf, type Signal } from '@builder.io/qwik';
export type CarouselRootProps = PropsOf<'section'> & {
    spaceBetweenSlides?: number;
    'bind:currSlideIndex'?: Signal<number>;
};
export declare const Carousel: import("@builder.io/qwik").Component<CarouselRootProps>;
