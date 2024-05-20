type ProgressProps = {
    /** Maximum value of the progress bar.**/
    max?: number;
    /** Current value of the progress bar. **/
    value?: number;
    /** Callback to get the label for the current value. **/
    getValueLabel?(value: number, max: number): string;
};
export declare const Progress: import("@builder.io/qwik").Component<ProgressProps & {
    align?: string | undefined;
} & import("@builder.io/qwik").HTMLElementAttrs & import("@builder.io/qwik").QwikAttributes<HTMLDivElement>>;
export {};
