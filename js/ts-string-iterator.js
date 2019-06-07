import TSAIterator from "ts-a-iterator.js";
class TSStringIterator extends TSAIterator {
    constructor(content) {
        super();
        this.content = content;
        this.index = 0;
    }
    hasNext() {
        return (this.index < this.content.length);
    }
    next() {
        return this.content.substring(this.index, ++this.index);
    }
    remove() {
        return undefined;
    }
    reset() {
        this.index = 0;
    }
}
export default TSStringIterator;
//# sourceMappingURL=ts-string-iterator.js.map