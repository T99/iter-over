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
                this.hadFinalIteration = false;
                this.iterator = iterator;
            }
            [Symbol.iterator]() {
                return this;
            }
            next() {
                if (!this.hadFinalIteration) {
                    if (!this.iterator.hasNext())
                        this.hadFinalIteration = true;
                    return {
                        done: !this.iterator.hasNext(),
                        value: this.iterator.next()
                    };
                }
                else {
                    throw new Error("ERR | Attempted to call #next on an Iterator that did not have another " +
                        "well-defined value.");
                }
            }
        }(this);
    }
}
exports.AbstractIterator = AbstractIterator;
//# sourceMappingURL=abstract-iterator.js.map