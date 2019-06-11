/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:21 AM -- December 07th, 2018.
 *	Website: dashboard.ampelfeedback.com
 */

/**
 * A generic iterator very similar to the pattern used in Java.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export interface IOIIterator<T> {
	
	/**
	 * Returns true if a call to #next() would return a meaningful result after calling this method.
	 *
	 * @returns {boolean} true if a call to #next() would return a meaningful result.
	 */
	hasNext(): boolean;
	
	/**
	 * Returns the next element this IOIIterator has to iterate over.
	 *
	 * @returns {T} The next element this IOIIterator has.
	 */
	next(): T | undefined;
	
	/**
	 * Performs the specified action for all of the remaining elements in this IOIIterator.
	 *
	 * @param {(element: T) => void} callback The action to perform on the remaining elements of this IOIIterator.
	 */
	forEachRemaining(callback: (element: T) => void): void;
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @returns {T} The last element returned by the #next() method.
	 */
	remove?(): T | undefined;
	
	/**
	 * Resets this IOIIterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 */
	reset?(): void;
	
	[Symbol.iterator](): IterableIterator<T | undefined>;
	
}