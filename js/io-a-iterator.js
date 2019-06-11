"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IOAIterator {
    forEachRemaining(callback) {
        while (this.hasNext())
            callback(this.next());
    }
    remove() {
        throw new Error("ERR | #remove() operation is not supported for this implementation of IOAIterator.");
    }
    reset() {
        throw new Error("ERR | #reset() operation is not supported for this implementation of IOAIterator.");
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
                    value: (this.iterator.hasNext() ? this.iterator.next() : undefined)
                };
            }
        }(this);
    }
}
exports.IOAIterator = IOAIterator;
//# sourceMappingURL=io-a-iterator.js.map