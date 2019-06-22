import { AbstractIterator } from "./abstract-iterator";
export declare class EmptyIterator extends AbstractIterator<any> {
    hasNext(): boolean;
    next(): any;
    remove(): any;
    reset(): void;
}
