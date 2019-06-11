import { IOAIterator } from "./io-a-iterator.js";
export declare class IOStringIterator extends IOAIterator<string> {
    private content;
    private index;
    constructor(content: string);
    hasNext(): boolean;
    next(): string;
    remove(): string | undefined;
    reset(): void;
}
