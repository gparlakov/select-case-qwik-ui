import { FocusTrap } from 'focus-trap';
export type WidthState = {
    width: number | null;
};
export declare function useModal(): {
    trapFocus: import("@builder.io/qwik").QRL<(modal: HTMLDialogElement) => FocusTrap>;
    activateFocusTrap: import("@builder.io/qwik").QRL<(focusTrap: FocusTrap | null) => void>;
    deactivateFocusTrap: import("@builder.io/qwik").QRL<(focusTrap: FocusTrap | null) => void>;
    showModal: import("@builder.io/qwik").QRL<(modal: HTMLDialogElement) => Promise<void>>;
    closeModal: import("@builder.io/qwik").QRL<(modal: HTMLDialogElement) => Promise<void>>;
    wasModalBackdropClicked: import("@builder.io/qwik").QRL<(modal: HTMLDialogElement | undefined, clickEvent: MouseEvent) => boolean>;
    supportClosingAnimation: import("@builder.io/qwik").QRL<(modal: HTMLDialogElement) => void>;
};
