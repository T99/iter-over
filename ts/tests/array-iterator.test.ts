/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:43 PM -- July 29th, 2019.
 *	Project: iter-over
 */

import { ArrayIterator } from "../array-iterator";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
test("Basic iteration.", () => {
	
	let arr: number[] = [3, 5, 7, 9, 11];
	let iter: ArrayIterator<number> = new ArrayIterator<number>(arr);
	
	expect(iter.hasNext()).toBeTruthy();
	expect(iter.next()).toStrictEqual(3);
	
	expect(iter.hasNext()).toBeTruthy();
	expect(iter.next()).toStrictEqual(5);
	
	expect(iter.hasNext()).toBeTruthy();
	expect(iter.next()).toStrictEqual(7);
	
	expect(iter.hasNext()).toBeTruthy();
	expect(iter.next()).toStrictEqual(9);
	
	expect(iter.hasNext()).toBeTruthy();
	expect(iter.next()).toStrictEqual(11);
	
	expect(iter.hasNext()).toBeFalsy();
	expect(iter.next()).toBeUndefined();
	
});