"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_iterator_1 = require("../abstract-iterator");
describe("Basic Iteration", () => {
    test("Iterating 0 through 9", () => {
        let iter = new class extends abstract_iterator_1.AbstractIterator {
            constructor() {
                super(...arguments);
                this.currentVal = 0;
            }
            hasNext() {
                return (this.currentVal < 9);
            }
            next() {
                return this.currentVal++;
            }
        };
        let expectedValue = 0;
        for (let num of iter) {
            console.log(num);
            expect(num).toBe(expectedValue++);
        }
    });
});
//# sourceMappingURL=abstract-iterator.test.js.map