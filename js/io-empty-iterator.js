"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io_a_iterator_js_1 = require("./io-a-iterator.js");
class IOEmptyIterator extends io_a_iterator_js_1.IOAIterator {
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
exports.IOEmptyIterator = IOEmptyIterator;
//# sourceMappingURL=io-empty-iterator.js.map