"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_a_iterator_1 = require("./io-a-iterator");
class IOObjectIterator extends io_a_iterator_1.IOAIterator {
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
exports.IOObjectIterator = IOObjectIterator;
//# sourceMappingURL=io-object-iterator.js.map