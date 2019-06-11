import { AbstractIterator } from "./abstract-iterator.js";
export declare class EmptyIterator extends AbstractIterator<any> {
    hasNext(): boolean;
    next(): any;
    remove(): any;
    reset(): void;
}
