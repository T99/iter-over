export interface IOIIterator<T> {
    hasNext(): boolean;
    next(): T | undefined;
    forEachRemaining(callback: (element: T) => void): void;
    remove?(): T | undefined;
    reset?(): void;
    [Symbol.iterator](): IterableIterator<T | undefined>;
}
