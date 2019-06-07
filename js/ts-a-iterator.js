class TSAIterator {
    forEachRemaining(callback) {
        while (this.hasNext())
            callback(this.next());
    }
    [Symbol.iterator]() {
        return new class {
            constructor(iterator) {
                this.iterator = iterator;
            }
            [Symbol.iterator]() {
                return this;
            }
            next() {
                return {
                    done: !this.iterator.hasNext(),
                    value: (this.iterator.hasNext() ? this.iterator.next() : undefined)
                };
            }
        }(this);
    }
}
export default TSAIterator;
//# sourceMappingURL=ts-a-iterator.js.map