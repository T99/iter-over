"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_1 = require("./abstract-iterator");
class ArrayIterator extends abstract_iterator_1.AbstractIterator {
    constructor(array) {
        super();
        this.iterationArray = array;
        this.cursor = 0;
    }
    hasNext() {
        return (this.cursor < this.iterationArray.length);
    }
    next() {
        if (this.hasNext())
            return this.iterationArray[this.cursor++];
        else
            return undefined;
    }
    remove() {
        if ((this.cursor > 0) && (this.hasNext()))
            return this.iterationArray[--this.cursor];
        else
            return undefined;
    }
    reset() {
        this.cursor = 0;
    }
}
exports.ArrayIterator = ArrayIterator;
//# sourceMappingURL=array-iterator.js.map