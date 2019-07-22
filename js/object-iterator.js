"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_1 = require("./abstract-iterator");
class ObjectIterator extends abstract_iterator_1.AbstractIterator {
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
exports.ObjectIterator = ObjectIterator;
//# sourceMappingURL=object-iterator.js.map