import TSAIterator from "ts-a-iterator.js";
class TSObjectIterator extends TSAIterator {
    constructor(content) {
        super();
        this.index = 0;
        this.content = content;
        if ((this.content !== null) && (this.content !== undefined)) {
            this.keys = Object.keys(this.content);
        }
        else
            this.keys = [];
    }
    hasNext() {
        return (this.index < this.keys.length);
    }
    next() {
        let key = this.keys[this.index++];
        let value = this.content[key];
        return { key, value };
    }
    remove() {
        if (this.index > 0) {
            let key = this.keys[--this.index];
            let value = this.content[key];
            let result = { key, value };
            delete this.content[key];
            return result;
        }
        else {
            return undefined;
        }
    }
    reset() {
        this.index = 0;
    }
}
export default TSObjectIterator;
//# sourceMappingURL=ts-object-iterator.js.map