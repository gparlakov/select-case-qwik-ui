export type ProgressState = 'indeterminate' | 'complete' | 'loading';
export declare function isNumber(value: unknown): value is number;
export declare function isValidMaxNumber(max: unknown): max is number;
export declare function isValidValueNumber(value: unknown, max: number): value is number;
export declare function defaultGetValueLabel(value: number, max: number): string;
export declare function getProgressState(value: number | undefined | null, maxValue: number): ProgressState;
