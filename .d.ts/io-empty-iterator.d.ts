import { IOAIterator } from "./io-a-iterator.js";
export declare class IOEmptyIterator extends IOAIterator<any> {
    hasNext(): boolean;
    next(): any;
    remove(): any;
    reset(): void;
}
