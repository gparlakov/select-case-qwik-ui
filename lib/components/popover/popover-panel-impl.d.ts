/**
 *
 * Portal Context in Qwik, akin to React's Portal, enables element teleportation. Rendering this component forces Qwik to parse the vDOM, enabling efficient context retrieval.
 * *
 * 1. Render on client -> don't need anything
 *
 * 2. SSR -> click -> force context the one time.
 *
 */
export declare const EnsuredContext: import("@builder.io/qwik").Component<unknown>;
export declare const PopoverPanelImpl: import("@builder.io/qwik").Component<{
    align?: string | undefined;
} & import("@builder.io/qwik").HTMLElementAttrs & import("@builder.io/qwik").QwikAttributes<HTMLDivElement>>;
