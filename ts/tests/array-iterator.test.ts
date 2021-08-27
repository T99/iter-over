/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:43 PM -- July 29th, 2019.
 *	Project: iter-over
 */

import { ArrayIterator } from "../utility/array-iterator";

/**
 * Test cases for the {@link ArrayIterator} class.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.5.0
 * @since v1.5.0
 */

describe("Initialization", (): void => {
	
	test("With empty input array.", (): void => {
		
		expect((): void => {
			
			new ArrayIterator<number>([]);
			
		}).not.toThrowError();
		
	});
	
	test("With populated input array.", (): void => {
		
		expect((): void => {
			
			new ArrayIterator<number>([1, 2, 3, 4, 5]);
			
		}).not.toThrowError();
		
	});
	
});

const iteratorArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let populatedIterator: ArrayIterator<number>;
let unpopulatedIterator: ArrayIterator<number>;

describe("Per-method tests.", (): void => {
	
	beforeEach((): void => {
		
		populatedIterator = new ArrayIterator<number>([...iteratorArray]);
		unpopulatedIterator = new ArrayIterator<number>([]);
		
	});
	
	describe("#hasNext", (): void => {
		
		test("Returns true at the beginning of a populated ArrayIterator.", (): void => {
		
			expect(populatedIterator.hasNext()).toBeTruthy();
			
		});
		
		test("Returns false at the beginning of an unpopulated ArrayIterator.", (): void => {
			
			expect(unpopulatedIterator.hasNext()).toBeFalsy();
			
		});
		
		test("Returns true for every element except for the last.", (): void => {
			
			for (let i: number = 0; i < iteratorArray.length; i++) {
				
				expect(populatedIterator.hasNext()).toBeTruthy();
				populatedIterator.next();
				
			}
			
			expect(populatedIterator.hasNext()).toBeFalsy();
			
		});
		
	});
	
	describe("#next", (): void => {
		
		test("Returns undefined at the beginning of an unpopulated ArrayIterator.", (): void => {
		
			expect(unpopulatedIterator.next()).toBeUndefined();
			
		});
		
		test("Returns the proper elements from a populated ArrayIterator.", (): void => {
			
			for (let value of iteratorArray) {
				
				expect(populatedIterator.next()).toBe(value);
				
			}
			
		});
		
		test("Returns undefined at the end of a populated ArrayIterator.", (): void => {
			
			for (let count: number = 0; count < iteratorArray.length; count++) populatedIterator.next();
			
			expect(populatedIterator.next()).toBeUndefined();
			
		});
		
	});
	
	describe("#forEachRemaining", (): void => {
		
		describe("Callback is called the expected number of times.", (): void => {
			
			test("For an empty ArrayIterator.", (): void => {
				
				let count: number = 0;
				
				unpopulatedIterator.forEachRemaining(() => count++);
				
				expect(count).toBe(0);
				
			});
			
			test("For a populated ArrayIterator.", (): void => {
				
				let count: number = 0;
				
				populatedIterator.forEachRemaining(() => count++);
				
				expect(count).toBe(iteratorArray.length);
				
			});
			
		});
		
		test("Callback returns the expected elements in the expected order.", (): void => {
			
			let resultSet: number[] = [];
			
			populatedIterator.forEachRemaining((element: number | undefined) => resultSet.push(element as number));
			
			expect(resultSet).toStrictEqual(iteratorArray);
			
		});
		
	});
	
	describe("#remove", (): void => {
		
		test("Returns undefined for every call on empty iterator.", (): void => {
		
			expect(unpopulatedIterator.remove()).toBeUndefined();
			
			expect(unpopulatedIterator.remove()).toBeUndefined();
			
			expect(unpopulatedIterator.remove()).toBeUndefined();
			
		});
		
		test("Returns undefined if #next has not yet been called.", (): void => {
			
			expect(populatedIterator.remove()).toBeUndefined();
			
		});
		
		
		
		test("Returns undefined beyond the end of the iteration content.", (): void => {
			
			for (let i: number = 0; i < iteratorArray.length + 1; i++) populatedIterator.next();
			
			expect(populatedIterator.remove()).toBeUndefined();
			
		});
		
		test("Returns the same result as the last call to #next in all cases.", (): void => {
			
			for (let i: number = 0; i < iteratorArray.length + 5; i++) {
				
				expect(populatedIterator.next()).toStrictEqual(populatedIterator.remove());
				
			}
			
		});
		
		test("Correctly modifies the underlying data structure.", (): void => {
		
		
		
		});
		
	});
	
	describe("#reset", (): void => {
		
		test("Should have no effect if called prior to any iteration.", (): void => {
		
			populatedIterator.reset();
			
			expect(populatedIterator.next()).toBe(iteratorArray[0]);
			
		});
		
		test("Should reset a partially exhausted iterator to it's start.", (): void => {
			
			for (let i: number = 0; i < iteratorArray.length / 2; i++) populatedIterator.next();
			
			populatedIterator.reset();
			
			expect(populatedIterator.next()).toBe(iteratorArray[0]);
			
		});
		
		test("Should reset a fully exhausted iterator to it's start.", (): void => {
			
			for (let i: number = 0; i < iteratorArray.length; i++) populatedIterator.next();
			
			populatedIterator.reset();
			
			expect(populatedIterator.next()).toBe(iteratorArray[0]);
			
		});
		
		test("Should reset an iterator that is past it's end to it's start.", (): void => {
			
			for (let i: number = 0; i < 2 * iteratorArray.length; i++) populatedIterator.next();
			
			populatedIterator.reset();
			
			expect(populatedIterator.next()).toBe(iteratorArray[0]);
			
		});
		
	});
	
	describe("#[Symbol.iterator]", (): void => {
		
		test("Successfully allows spread syntax.", (): void => {
			
			expect([...populatedIterator]).toStrictEqual(iteratorArray);
			
		});
		
		test("Successfully allows for-in iteration.", (): void => {
			
			for (let prop in populatedIterator) expect(prop).toBeDefined();
			
		});
		
		test("Successfully allows for-of iteration.", (): void => {
			
			let count: number = 0;
			
			for (let value of populatedIterator) expect(value).toBe(iteratorArray[count++]);
			
			expect(count).toBe(iteratorArray.length);
			
		});
		
	});
	
	describe("#getIterableIterator", (): void => {
		
		test("Successfully allows spread syntax.", (): void => {
			
			expect([...populatedIterator.getIterableIterator()]).toStrictEqual(iteratorArray);
			
		});
		
		test("Successfully allows for-in iteration.", (): void => {
			
			for (let prop in populatedIterator.getIterableIterator()) expect(prop).toBeDefined();
			
		});
		
		test("Successfully allows for-of iteration.", (): void => {
			
			let count: number = 0;
			
			for (let value of populatedIterator.getIterableIterator()) expect(value).toBe(iteratorArray[count++]);
			
			expect(count).toBe(iteratorArray.length);
			
		});
		
	});
	
});
