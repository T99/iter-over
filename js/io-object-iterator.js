"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const io_a_iterator_js_1 = __importDefault(require("./io-a-iterator.js"));
class IOObjectIterator extends io_a_iterator_js_1.default {
    constructor(content) {
        super();
        this.index = 0;
        this.content = content;
        if ((this.content !== null) && (this.content !== undefined)) {
            this.keys = Object.keys(this.content);
        }
        else
            this.keys = [];
    }
    hasNext() {
        return (this.index < this.keys.length);
    }
    next() {
        let key = this.keys[this.index++];
        let value = this.content[key];
        return { key, value };
    }
    remove() {
        if (this.index > 0) {
            let key = this.keys[--this.index];
            let value = this.content[key];
            let result = { key, value };
            delete this.content[key];
            return result;
        }
        else {
            return undefined;
        }
    }
    reset() {
        this.index = 0;
    }
}
exports.default = IOObjectIterator;
//# sourceMappingURL=io-object-iterator.js.map