export type AriaHiddenSelectProps = {
    /**
     * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
     */
    autoComplete?: AutoFill;
    /** The text label for the select. */
    label?: string;
    /** HTML form input name. */
    name?: string;
    /** Sets the disabled state of the select and input. */
    disabled?: boolean;
    required?: boolean;
};
export declare const HiddenNativeSelect: import("@builder.io/qwik").Component<AriaHiddenSelectProps & {
    length?: number | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
    size?: number | undefined;
    multiple?: boolean | undefined;
    autocomplete?: AutoFill | undefined;
    required?: boolean | undefined;
    selectedIndex?: number | undefined;
    form?: string | undefined;
    value?: string | number | readonly string[] | undefined;
    'bind:value'?: import("@builder.io/qwik").Signal<string | undefined> | undefined;
} & import("@builder.io/qwik").HTMLElementAttrs & import("@builder.io/qwik").QwikAttributes<HTMLSelectElement>>;
