import { type Signal } from '@builder.io/qwik';
export interface CarouselContext {
    slideOffsetSig: Signal<number>;
    numSlidesSig: Signal<number>;
    spaceBetweenSlides: number;
    slideRefsArray: Signal<Array<Signal>>;
    viewportRef: Signal<HTMLDivElement | undefined>;
    containerRef: Signal<HTMLDivElement | undefined>;
    transitionDurationSig: Signal<number>;
    currentIndexSig: Signal<number>;
    isDraggingSig: Signal<boolean>;
    initialX: Signal<number>;
    initialTransformX: Signal<number>;
}
