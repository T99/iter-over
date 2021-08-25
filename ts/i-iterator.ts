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
	 * Returns true if this iterator has at least one more element that can be returned from {@link #next}.
	 *
	 * @returns {boolean} true if this iterator has at least one more element that can be returned from {@link #next}.
	 */
	hasNext(): boolean;
	
	/**
	 * Returns the next element this IIterator has to iterate over.
	 *
	 * @returns {E | undefined} The next element this IIterator has.
	 */
	next(): E | undefined;
	
	/**
	 * Performs the specified action for all of the remaining elements in this IIterator.
	 *
	 * @param {(element: E) => void} callback The action to perform on the remaining elements of this IIterator.
	 */
	forEachRemaining(callback: (element: E) => void): void;
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @returns {E | undefined} The last element returned by the #next() method.
	 */
	remove?(): E | undefined;
	
	/**
	 * Resets this IIterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 * 
	 * Note that this does not/should not modify the underlying data structure, meaning that any modifications will not
	 * be/should not be 'undone' by calling this method.
	 */
	reset?(): void;
	
	/**
	 * Returns an instance of an IterableIterator that allows 'this' to be iterable using the baked-in 'for...of'
	 * syntax, rather than more verbose iteration (i.e. using a 'while' loop).
	 * 
	 * @return {IterableIterator<E>} An instance of an IterableIterator.
	 */
	[Symbol.iterator](): IterableIterator<E>;
	
	/**
	 * This method is simply an ease-of-understanding alias method for the [Symbol.iterator] method.
	 * 
	 * @return {IterableIterator<E>} An instance of an IterableIterator.
	 * @see #[Symbol.iterator]
	 */
	getIterableIterator(): IterableIterator<E>;
	
}
