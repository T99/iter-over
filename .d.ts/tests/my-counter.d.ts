import { IOAIterator } from "../io-a-iterator";
declare class MyCounter extends IOAIterator<number> {
    private val;
    hasNext(): boolean;
    next(): number;
}
export default MyCounter;
