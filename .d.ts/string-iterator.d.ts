import { AbstractIterator } from "./abstract-iterator.js";
export declare class StringIterator extends AbstractIterator<string> {
    private content;
    private index;
    constructor(content: string);
    hasNext(): boolean;
    next(): string;
    remove(): string | undefined;
    reset(): void;
}
