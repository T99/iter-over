"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_1 = require("./abstract-iterator");
class EmptyIterator extends abstract_iterator_1.AbstractIterator {
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