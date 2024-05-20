import { type Signal, type PropsOf, type QRL } from '@builder.io/qwik';
export type CollapsibleProps = PropsOf<'div'> & {
    id?: string;
    open?: boolean | undefined;
    'bind:open'?: Signal<boolean>;
    onOpenChange$?: QRL<(open: boolean) => void>;
    disabled?: boolean;
};
export declare const Collapsible: import("@builder.io/qwik").Component<CollapsibleProps>;
