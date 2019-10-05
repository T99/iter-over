export interface IIterator<E> {
    hasNext(): boolean;
    next(): E | undefined;
    forEachRemaining(callback: (element: E) => void): void;
    remove?(): E | undefined;
    reset?(): void;
    [Symbol.iterator](): IterableIterator<E>;
    getIterableIterator(): IterableIterator<E>;
}
