"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_1 = require("./abstract-iterator");
class StringLineIterator extends abstract_iterator_1.AbstractIterator {
    constructor(content) {
        super();
        this.content = content.trim().split(/\r\n|\r|\n/);
        this.index = 0;
    }
    hasNext() {
        return (this.index < this.content.length);
    }
    next() {
        let content = this.content[this.index++];
        if (typeof content === "string")
            return content.trim();
        else
            return content;
    }
    remove() {
        return undefined;
    }
    reset() {
        this.index = 0;
    }
}
exports.StringLineIterator = StringLineIterator;
//# sourceMappingURL=string-line-iterator.js.map