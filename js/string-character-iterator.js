"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const abstract_iterator_1=require("./abstract-iterator");class StringCharacterIterator extends abstract_iterator_1.AbstractIterator{constructor(t){super(),this.content=t,this.index=0}hasNext(){return this.index<this.content.length}next(){return this.content.substring(this.index,++this.index)}remove(){}reset(){this.index=0}}exports.StringCharacterIterator=StringCharacterIterator;
//# sourceMappingURL=string-character-iterator.js.map
