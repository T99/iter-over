"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_iterator_1 = require("../object-iterator");
describe("Basic Object Iteration", () => {
    test("Simple Object", () => {
        let obj = {
            name: "Trevor",
            time: 0,
            money: false
        };
        let iter = new object_iterator_1.ObjectIterator(obj);
        expect(iter.hasNext()).toBeTruthy();
        expect(iter.next()).toStrictEqual({ key: "name", value: "Trevor" });
        expect(iter.hasNext()).toBeTruthy();
        expect(iter.next()).toStrictEqual({ key: "time", value: 0 });
        expect(iter.hasNext()).toBeTruthy();
        expect(iter.next()).toStrictEqual({ key: "money", value: false });
        expect(iter.hasNext()).toBeFalsy();
        expect(iter.next()).toStrictEqual({ key: undefined, value: undefined });
    });
    test("[Symbol.iterator]", () => {
        let obj = {
            name: "Trevor",
            time: 0,
            money: false
        };
        let iter = new object_iterator_1.ObjectIterator(obj);
        let item = 0;
        for (let kvPair of iter) {
            switch (item) {
                case 0:
                    expect(iter.hasNext()).toBeTruthy();
                    expect(kvPair).toStrictEqual({ key: "name", value: "Trevor" });
                    break;
                case 1:
                    expect(iter.hasNext()).toBeTruthy();
                    expect(kvPair).toStrictEqual({ key: "time", value: 0 });
                    break;
                case 2:
                    expect(iter.hasNext()).toBeFalsy();
                    expect(kvPair).toStrictEqual({ key: "money", value: false });
                    break;
                default:
                    fail("Switch statement should not reach this case statement.");
            }
            item++;
        }
    });
});
//# sourceMappingURL=object-iterator.test.js.map