/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:19 PM -- July 21st, 2019.
 *	Website: iter-over
 */

import { StringLineIterator } from "../string-line-iterator";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

let iterator: StringLineIterator;

describe("Single-line input.", () => {
	
	let content: string = "Hello there!";

	beforeEach(() => {
		
		iterator = new StringLineIterator(content);
		
	});
	
	test("Expect single returned value.", () => {
		
		let returnedValues: number = 0;
		
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
	
	let content: string = `This is
my multiline
string content`;
	
	beforeEach(() => {
		
		iterator = new StringLineIterator(content);
		
	});
	
	test("Expect set-number of returned values.", () => {
		
		let returnedValues: number = 0;
		
		iterator.forEachRemaining(() => returnedValues++);
		
		expect(returnedValues).toBe(3);
		
	});
	
	test("Expect correct string to be received.", () => {
		
		let result: string[] = [];
		
		iterator.forEachRemaining((value: string) => result.push(value));
		
		expect(result.join("\n")).toBe(content);
		
	});
	
	test("Expect forced calls to #next to return undefined.", () => {
		
		iterator.next();
		iterator.next();
		iterator.next();
		
		expect(iterator.next()).toBeUndefined();
		
	});
	
});