import { PropsOf } from '@builder.io/qwik';
export type ToggleProps = PropsOf<'input'> & {
    disabled?: boolean;
    pressed?: boolean;
    defaultPressed?: boolean;
};
export declare const Toggle: import("@builder.io/qwik").Component<ToggleProps>;
