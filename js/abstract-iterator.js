"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractIterator {
    forEachRemaining(callback) {
        while (this.hasNext())
            callback(this.next());
    }
    remove() {
        throw new Error("ERR | #remove() operation is not supported for this implementation of AbstractIterator.");
    }
    reset() {
        throw new Error("ERR | #reset() operation is not supported for this implementation of AbstractIterator.");
    }
    [Symbol.iterator]() {
        return new class {
            constructor(iterator) {
                this.iterator = iterator;
            }
            [Symbol.iterator]() {
                return this;
            }
            next() {
                return {
                    done: !this.iterator.hasNext(),
                    value: this.iterator.next()
                };
            }
        }(this);
    }
}
exports.AbstractIterator = AbstractIterator;
//# sourceMappingURL=abstract-iterator.js.map