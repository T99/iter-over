import { AbstractIterator } from "./abstract-iterator";
export declare class StringCharacterIterator extends AbstractIterator<string> {
    private content;
    private index;
    constructor(content: string);
    hasNext(): boolean;
    next(): string;
    remove(): string | undefined;
    reset(): void;
}
