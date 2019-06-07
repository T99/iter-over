import TSAIterator from "ts-a-iterator.js";
class TSEmptyIterator extends TSAIterator {
    hasNext() {
        return false;
    }
    next() {
        return undefined;
    }
    remove() {
        return undefined;
    }
    reset() {
        return;
    }
}
export default TSEmptyIterator;
//# sourceMappingURL=ts-empty-iterator.js.map