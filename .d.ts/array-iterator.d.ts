import { AbstractIterator } from "./abstract-iterator";
export declare class ArrayIterator<E> extends AbstractIterator<E> {
    private iterationArray;
    private cursor;
    constructor(array: E[]);
    hasNext(): boolean;
    next(): E | undefined;
    remove(): E | undefined;
    reset(): void;
}
