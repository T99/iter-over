/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:05 PM -- June 07th, 2019.
 *	Website: iter-over
 */

import { AbstractIterator } from "../abstract-iterator";

describe("Basic Iteration", () => {

	test("Iterating 0 through 9", () => {
		
		let iter: AbstractIterator<number> = new class extends AbstractIterator<number> {
			
			private currentVal: number = 0;
			
			public hasNext(): boolean {
				
				return (this.currentVal < 9);
				
			}
			
			public next(): any | undefined {
				
				return this.currentVal++;
				
			}
			
		};
		
		let expectedValue: number = 0;
		
		for (let num of iter) {
			
			console.log(num);
			expect(num).toBe(expectedValue++);
			
		}
		
	});

});