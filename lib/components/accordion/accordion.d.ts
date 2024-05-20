import type { FunctionComponent } from '@builder.io/qwik';
import { AccordionContent as InternalAccordionContent } from './accordion-content';
import { AccordionItem as InternalAccordionItem } from './accordion-item';
import { AccordionRootProps } from './accordion-root';
import { AccordionTrigger as InternalAccordionTrigger } from './accordion-trigger';
export type AccordionProps = AccordionRootProps & {
    itemComponent?: typeof InternalAccordionItem;
    triggerComponent?: typeof InternalAccordionTrigger;
    contentComponent?: typeof InternalAccordionContent;
};
export declare const Accordion: FunctionComponent<AccordionProps>;
