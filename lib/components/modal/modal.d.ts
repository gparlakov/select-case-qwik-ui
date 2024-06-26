import { PropsOf, QRL, Signal } from '@builder.io/qwik';
export type ModalProps = Omit<PropsOf<'dialog'>, 'open'> & {
    onShow$?: QRL<() => void>;
    onClose$?: QRL<() => void>;
    'bind:show': Signal<boolean>;
    closeOnBackdropClick?: boolean;
    alert?: boolean;
};
export declare const Modal: import("@builder.io/qwik").Component<ModalProps>;
