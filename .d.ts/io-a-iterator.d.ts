import { IOIIterator } from "./io-i-iterator";
export declare abstract class IOAIterator<T> implements IOIIterator<T> {
    abstract hasNext(): boolean;
    abstract next(): T | undefined;
    forEachRemaining(callback: (element: T) => void): void;
    remove(): T | undefined;
    reset(): void;
    [Symbol.iterator](): IterableIterator<T | undefined>;
}
