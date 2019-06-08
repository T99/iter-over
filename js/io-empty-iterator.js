"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const io_a_iterator_js_1 = __importDefault(require("./io-a-iterator.js"));
class IOEmptyIterator extends io_a_iterator_js_1.default {
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
exports.default = IOEmptyIterator;
//# sourceMappingURL=io-empty-iterator.js.map