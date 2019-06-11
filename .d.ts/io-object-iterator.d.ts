import { IOAIterator } from "./io-a-iterator";
import { IOKeyValuePair } from "./io-key-value-pair";
export declare class IOObjectIterator<E = any> extends IOAIterator<IOKeyValuePair<string, E>> {
    private content;
    private keys;
    private index;
    constructor(content: any);
    hasNext(): boolean;
    next(): IOKeyValuePair<string, E>;
    remove(): IOKeyValuePair<string, E> | undefined;
    reset(): void;
}
