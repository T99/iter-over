import { AbstractIterator } from "./abstract-iterator";
import { KeyValuePair } from "./key-value-pair";
export declare class ObjectIterator<E = any> extends AbstractIterator<KeyValuePair<string, E>> {
    private content;
    private keys;
    private index;
    constructor(content: any);
    hasNext(): boolean;
    next(): KeyValuePair<string, E>;
    remove(): KeyValuePair<string, E> | undefined;
    reset(): void;
}
