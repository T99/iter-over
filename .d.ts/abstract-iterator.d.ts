import { IIterator } from "./i-iterator";
export declare abstract class AbstractIterator<E> implements IIterator<E> {
    abstract hasNext(): boolean;
    abstract next(): E | undefined;
    forEachRemaining(callback: (element: E) => void): void;
    remove(): E | undefined;
    reset(): void;
    [Symbol.iterator](): IterableIterator<E>;
    getIterableIterator(): IterableIterator<E>;
}
