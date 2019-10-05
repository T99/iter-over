"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_line_iterator_1 = require("../string-line-iterator");
let iterator;
describe("Single-line input.", () => {
    let content = "Hello there!";
    beforeEach(() => {
        iterator = new string_line_iterator_1.StringLineIterator(content);
    });
    test("Expect single returned value.", () => {
        let returnedValues = 0;
        iterator.forEachRemaining(() => returnedValues++);
        expect(returnedValues).toBe(1);
    });
    test("Expect correct string to be received.", () => {
        expect(iterator.next()).toBe(content);
    });
    test("Expect forced calls to #next to return undefined.", () => {
        iterator.next();
        expect(iterator.next()).toBeUndefined();
    });
});
describe("Multi-line input.", () => {
    let content = `This is
my multiline
string content`;
    beforeEach(() => {
        iterator = new string_line_iterator_1.StringLineIterator(content);
    });
    test("Expect set-number of returned values.", () => {
        let returnedValues = 0;
        iterator.forEachRemaining(() => returnedValues++);
        expect(returnedValues).toBe(3);
    });
    test("Expect correct string to be received.", () => {
        let result = [];
        iterator.forEachRemaining((value) => result.push(value));
        expect(result.join("\n")).toBe(content);
    });
    test("Expect forced calls to #next to return undefined.", () => {
        iterator.next();
        iterator.next();
        iterator.next();
        expect(iterator.next()).toBeUndefined();
    });
});
//# sourceMappingURL=string-line-iterator.test.js.map