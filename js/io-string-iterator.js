"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_a_iterator_js_1 = require("./io-a-iterator.js");
class IOStringIterator extends io_a_iterator_js_1.IOAIterator {
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
exports.IOStringIterator = IOStringIterator;
//# sourceMappingURL=io-string-iterator.js.map