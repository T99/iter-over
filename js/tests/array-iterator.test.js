"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_iterator_1 = require("../array-iterator");
describe("Initialization", () => {
    test("With empty input array.", () => {
        let arrayIterator = new array_iterator_1.ArrayIterator([]);
        arrayIterator;
    });
    test("With populated input array.", () => {
        let arrayIterator = new array_iterator_1.ArrayIterator([1, 2, 3, 4, 5]);
        arrayIterator;
    });
});
function getUnpopulatedIterator() {
    return new array_iterator_1.ArrayIterator([]);
}
function getPopulatedIterator() {
    return new array_iterator_1.ArrayIterator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
describe("Per-method tests.", () => {
    describe("#hasNext", () => {
        test("Returns true at the beginning of a populated ArrayIterator.", () => {
            expect(getPopulatedIterator().hasNext()).toBeTruthy();
        });
        test("Returns false at the beginning of an unpopulated ArrayIterator.", () => {
            expect(getUnpopulatedIterator().hasNext()).toBeFalsy();
        });
        test("Returns true for every element except for the last.", () => {
            let iterator = getPopulatedIterator();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeTruthy();
            iterator.next();
            expect(iterator.hasNext()).toBeFalsy();
        });
    });
    describe("#next", () => {
        test("Returns undefined at the beginning of an unpopulated ArrayIterator.", () => {
            expect(getUnpopulatedIterator().next()).toBeUndefined();
        });
        test("Returns the proper elements from a populated ArrayIterator.", () => {
            let iterator = getPopulatedIterator();
            expect(iterator.next()).toBe(0);
            expect(iterator.next()).toBe(1);
            expect(iterator.next()).toBe(2);
            expect(iterator.next()).toBe(3);
            expect(iterator.next()).toBe(4);
            expect(iterator.next()).toBe(5);
            expect(iterator.next()).toBe(6);
            expect(iterator.next()).toBe(7);
            expect(iterator.next()).toBe(8);
            expect(iterator.next()).toBe(9);
            expect(iterator.next()).toBe(10);
        });
        test("Returns undefined at the end of a populated ArrayIterator.", () => {
            let iterator = getPopulatedIterator();
            for (let count = 0; count < 11; count++)
                iterator.next();
            expect(iterator.next()).toBeUndefined();
        });
    });
    describe("#forEachRemaining", () => {
        describe("Callback is called the expected number of times.", () => {
            test("For an empty ArrayIterator.", () => {
                let count = 0;
                let iterator = getUnpopulatedIterator();
                iterator.forEachRemaining(() => count++);
                expect(count).toBe(0);
            });
            test("For a populated ArrayIterator.", () => {
                let count = 0;
                let iterator = getPopulatedIterator();
                iterator.forEachRemaining(() => count++);
                expect(count).toBe(11);
            });
        });
        test("Callback returns the expected elements in the expected order.", () => {
            let iterator = getPopulatedIterator();
            let resultSet = [];
            iterator.forEachRemaining((element) => resultSet.push(element));
            expect(resultSet).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
    });
    describe("#remove", () => {
        test("TODO", () => {
            fail("Test not yet written...");
        });
    });
    describe("#reset", () => {
        test("TODO", () => {
            fail("Test not yet written...");
        });
    });
    describe("#[Symbol.iterator]", () => {
        test("TODO", () => {
            fail("Test not yet written...");
        });
    });
    describe("#getIterableIterator", () => {
        test("TODO", () => {
            fail("Test not yet written...");
        });
    });
});
//# sourceMappingURL=array-iterator.test.js.map