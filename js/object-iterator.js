"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const abstract_iterator_1=require("./abstract-iterator");class ObjectIterator extends abstract_iterator_1.AbstractIterator{constructor(t){super(),this.index=0,this.content=t,null!==this.content&&void 0!==this.content?this.keys=Object.keys(this.content):this.keys=[]}hasNext(){return this.index<this.keys.length}next(){let t=this.keys[this.index++];return{key:t,value:this.content[t]}}remove(){if(this.index>0){let t=this.keys[--this.index],e={key:t,value:this.content[t]};return delete this.content[t],e}}reset(){this.index=0}}exports.ObjectIterator=ObjectIterator;
//# sourceMappingURL=object-iterator.js.map
