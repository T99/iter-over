"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_js_1 = require("./abstract-iterator.js");
class EmptyIterator extends abstract_iterator_js_1.AbstractIterator {
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
exports.EmptyIterator = EmptyIterator;
//# sourceMappingURL=empty-iterator.js.map