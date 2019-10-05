/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:43 PM -- July 29th, 2019.
 *	Project: iter-over
 */

import { ArrayIterator } from "../array-iterator";

/**
 * Test cases for the {@link ArrayIterator} class.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.5.0
 * @since v1.5.0
 */

describe("Initialization", () => {
	
	test("With empty input array.", () => {
		
		let arrayIterator: ArrayIterator<number> = new ArrayIterator<number>([]);
		
		// To keep my IDE from yelling at me.
		arrayIterator;
		
	});
	
	test("With populated input array.", () => {
		
		let arrayIterator: ArrayIterator<number> = new ArrayIterator<number>([1, 2, 3, 4, 5]);
		
		// To keep my IDE from yelling at me.
		arrayIterator;
		
	});
	
});

function getUnpopulatedIterator(): ArrayIterator<any> {
	
	return new ArrayIterator<any>([]);
	
}

function getPopulatedIterator(): ArrayIterator<number> {
	
	return new ArrayIterator<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	
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
			
			let iterator: ArrayIterator<number> = getPopulatedIterator();
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 0
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 1
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 2
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 3
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 4
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 5
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 6
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 7
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 8
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 9
			
			expect(iterator.hasNext()).toBeTruthy();
			iterator.next(); // 10
			
			expect(iterator.hasNext()).toBeFalsy();
			
		});
		
	});
	
	describe("#next", () => {
		
		test("Returns undefined at the beginning of an unpopulated ArrayIterator.", () => {
		
			expect(getUnpopulatedIterator().next()).toBeUndefined();
			
		});
		
		test("Returns the proper elements from a populated ArrayIterator.", () => {
			
			let iterator: ArrayIterator<number> = getPopulatedIterator();
			
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
			
			let iterator: ArrayIterator<number> = getPopulatedIterator();
			
			for (let count: number = 0; count < 11; count++) iterator.next();
			
			expect(iterator.next()).toBeUndefined();
			
		});
		
	});
	
	describe("#forEachRemaining", () => {
		
		describe("Callback is called the expected number of times.", () => {
			
			test("For an empty ArrayIterator.", () => {
				
				let count: number = 0;
				let iterator: ArrayIterator<number> = getUnpopulatedIterator();
				
				iterator.forEachRemaining(() => count++);
				
				expect(count).toBe(0);
				
			});
			
			test("For a populated ArrayIterator.", () => {
				
				let count: number = 0;
				let iterator: ArrayIterator<number> = getPopulatedIterator();
				
				iterator.forEachRemaining(() => count++);
				
				expect(count).toBe(11);
				
			});
			
		});
		
		test("Callback returns the expected elements in the expected order.", () => {
			
			let iterator: ArrayIterator<number> = getPopulatedIterator();
			let resultSet: number[] = [];
			
			iterator.forEachRemaining((element: number) => resultSet.push(element));
			
			expect(resultSet).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
			
		});
		
	});
	
	describe("#remove", () => {
		
		test("TODO", () => {
		
			// TODO [10/4/19 @ 11:02 PM] Finish test body.
			fail("Test not yet written...");
			
		});
		
	});
	
	describe("#reset", () => {
		
		test("TODO", () => {
		
			// TODO [10/4/19 @ 11:02 PM] Finish test body.
			fail("Test not yet written...");
			
		});
		
	});
	
	describe("#[Symbol.iterator]", () => {
		
		test("TODO", () => {
			
			// TODO [10/4/19 @ 11:02 PM] Finish test body.
			fail("Test not yet written...");
			
		});
		
	});
	
	describe("#getIterableIterator", () => {
		
		test("TODO", () => {
			
			// TODO [10/4/19 @ 11:02 PM] Finish test body.
			fail("Test not yet written...");
			
		});
		
	});
	
});