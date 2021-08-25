/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:13 PM -- July 21st, 2019.
 *	Website: iter-over
 */

import { EmptyIterator } from "../utility/empty-iterator";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

let iterator: EmptyIterator;

beforeEach(() => {
	
	iterator = new EmptyIterator();
	
});

test("#hasNext returns false.", () => {
	
	expect(iterator.hasNext()).toBeFalsy();
	
});

test("#next returns undefined.", () => {
	
	expect(iterator.next()).toBeUndefined();
	
});

test("#remove returns undefined.", () => {
	
	expect(iterator.remove()).toBeUndefined();
	
});

test("#reset runs without throwing error.", () => {
	
	expect(() => iterator.reset()).not.toThrowError();
	
});
