import { IIterator } from "./i-iterator";
export declare abstract class AbstractIterator<T> implements IIterator<T> {
    abstract hasNext(): boolean;
    abstract next(): T | undefined;
    forEachRemaining(callback: (element: T) => void): void;
    remove(): T | undefined;
    reset(): void;
    [Symbol.iterator](): IterableIterator<T>;
}
