/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:05 PM -- June 07th, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "../abstract-iterator";

let iterator: AbstractIterator<any>;

describe("Iterating 0 through 9.", () => {
	
	beforeEach(() => {
		
		iterator = new class extends AbstractIterator<number> {
			
			private currentVal: number = 0;
			
			public hasNext(): boolean {
				
				return (this.currentVal <= 9);
				
			}
			
			public next(): any | undefined {
				
				return this.currentVal++;
				
			}
			
		};
		
	});
	
	test("Number values are correct.", () => {
		
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
		
	});
	
	test("#forEachRemaining", () => {
	
		let sum: number = 0;
		
		iterator.forEachRemaining((value: number) => sum += value);
		
		expect(sum).toBe(45);
		
	});
	
	test("#remove", () => {
		
		expect(() => iterator.remove()).toThrow(Error);
		
	});
	
	test("#reset", () => {
		
		expect(() => iterator.reset()).toThrow(Error);
		
	});
	
	test("#[Symbol.iterator]", () => {
		
		expect(iterator[Symbol.iterator]).toBeDefined();
		
	});
	
	test("#hasNext is false after iteration.", () => {
		
		let value: any;
		
		do {
			
			value = iterator.next();
			
		} while (value !== 9);
		
		expect(iterator.hasNext()).toBeFalsy();
		
	});
	
});

describe("Iterating A through Z.", () => {
	
	beforeEach(() => {
		
		iterator = new class extends AbstractIterator<string> {
			
			private ascii: number = 65;
			
			public hasNext(): boolean {
				
				return (this.ascii <= 90);
				
			}
			
			public next(): string {
				
				return String.fromCharCode(this.ascii++);
				
			}
			
		};
		
	});
	
	test("Character values are correct.", () => {
		
		for (let char of [
			"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
			"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
		]) {
			
			expect(iterator.hasNext()).toBeTruthy();
			expect(iterator.next()).toBe(char);
			
		}
		
	});
	
	test("#forEachRemaining", () => {
		
		let concat: string = "";
		
		iterator.forEachRemaining((char: string) => concat += char);
		
		expect(concat).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		
	});
	
	test("#remove", () => {
		
		expect(() => iterator.remove()).toThrow(Error);
		
	});
	
	test("#reset", () => {
		
		expect(() => iterator.reset()).toThrow(Error);
		
	});
	
	test("#[Symbol.iterator]", () => {
		
		expect(iterator[Symbol.iterator]).toBeDefined();
		
	});
	
	test("#hasNext is false after iteration.", () => {
		
		let value: any;
		
		do {
			
			value = iterator.next();
			
		} while (value !== "Z");
		
		expect(iterator.hasNext()).toBeFalsy();
		
	});
	
});