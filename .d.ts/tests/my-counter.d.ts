import { AbstractIterator } from "../abstract-iterator";
declare class MyCounter extends AbstractIterator<number> {
    private val;
    hasNext(): boolean;
    next(): number;
}
export default MyCounter;
