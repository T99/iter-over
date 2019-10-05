/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:21 AM -- December 07th, 2018.
 *	Project: iter-over
 */

/**
 * An interface representing the general form of an iterable class.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.5.0
 * @since v0.1.0
 */
export interface IIterator<E> {
	
	/**
	 * Returns true if a call to #next() would return a meaningful result after calling this method.
	 *
	 * @returns true if a call to #next() would return a meaningful result.
	 */
	hasNext(): boolean;
	
	/**
	 * Returns the next element this IIterator has to iterate over.
	 *
	 * @returns The next element this IIterator has.
	 */
	next(): E | undefined;
	
	/**
	 * Performs the specified action for all of the remaining elements in this IIterator.
	 *
	 * @param callback The action to perform on the remaining elements of this IIterator.
	 */
	forEachRemaining(callback: (element: E) => void): void;
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @returns The last element returned by the #next() method.
	 */
	remove?(): E | undefined;
	
	/**
	 * Resets this IIterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 */
	reset?(): void;
	
	/**
	 * Returns an instance of an IterableIterator that allows 'this' to be iterable using the baked-in 'for...of'
	 * syntax, rather than more verbose iteration (i.e. using a 'while' loop).
	 * 
	 * @return An instance of an IterableIterator.
	 */
	[Symbol.iterator](): IterableIterator<E>;
	
	/**
	 * This method is simply an ease-of-understanding alias method for the [Symbol.iterator] method.
	 * 
	 * @return An instance of an IterableIterator.
	 * @see IIterator#[Symbol.iterator]
	 */
	getIterableIterator(): IterableIterator<E>;
	
}