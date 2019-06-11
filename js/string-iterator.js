"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_js_1 = require("./abstract-iterator.js");
class StringIterator extends abstract_iterator_js_1.AbstractIterator {
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
exports.StringIterator = StringIterator;
//# sourceMappingURL=string-iterator.js.map