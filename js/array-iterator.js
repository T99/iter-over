"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const abstract_iterator_1=require("./abstract-iterator");class ArrayIterator extends abstract_iterator_1.AbstractIterator{constructor(r){super(),this.iterationArray=r,this.cursor=0}hasNext(){return this.cursor<this.iterationArray.length}next(){return this.iterationArray[this.cursor++]}}exports.ArrayIterator=ArrayIterator;
//# sourceMappingURL=array-iterator.js.map
