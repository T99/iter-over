"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empty_iterator_1 = require("../empty-iterator");
let iterator;
beforeEach(() => {
    iterator = new empty_iterator_1.EmptyIterator();
});
test("#hasNext returns false.", () => {
    expect(iterator.hasNext()).toBeFalsy();
});
test("#next returns undefined.", () => {
    expect(iterator.next()).toBeUndefined();
});
test("#remove returns undefined.", () => {
    expect(iterator.remove()).toBeUndefined();
});
test("#reset runs without throwing error.", () => {
    expect(() => iterator.reset()).not.toThrowError();
});
//# sourceMappingURL=empty-iterator.test.js.map