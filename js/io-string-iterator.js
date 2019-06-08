"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const io_a_iterator_js_1 = __importDefault(require("./io-a-iterator.js"));
class IOStringIterator extends io_a_iterator_js_1.default {
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
exports.default = IOStringIterator;
//# sourceMappingURL=io-string-iterator.js.map