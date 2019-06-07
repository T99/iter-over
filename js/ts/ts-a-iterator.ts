/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:21 AM -- December 07th, 2018.
 *	Website: dashboard.ampelfeedback.com
 */

import TSIIterator from "ts-i-iterator.js";

/**
 * A generic iterator very similar to the pattern used in Java.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
abstract class TSAIterator<T> implements TSIIterator<T> {
	
	/**
	 * Returns true if a call to #next() would return a meaningful result after calling this method.
	 *
	 * @returns {boolean} true if a call to #next() would return a meaningful result.
	 */
	public abstract hasNext(): boolean;
	
	/**
	 * Returns the next element this TSAIterator has to iterate over.
	 *
	 * @returns {T} The next element this TSAIterator has.
	 */
	public abstract next(): T;
	
	/**
	 * Performs the specified action for all of the remaining elements in this TSAIterator.
	 *
	 * @param {(element: T) => void} callback The action to perform on the remaining elements of this TSAIterator.
	 */
	public forEachRemaining(callback: (element: T) => void): void {
		
		while (this.hasNext()) callback(this.next());
		
	}
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @returns {T} The last element returned by the #next() method.
	 */
	public abstract remove?(): T | undefined;
	
	/**
	 * Resets this TSAIterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 */
	public abstract reset(): void;
	
	public [Symbol.iterator](): IterableIterator<T | undefined> {
		
		return new class implements IterableIterator<T | undefined> {
			
			private iterator: TSAIterator<T | undefined>;
			
			public constructor(iterator: TSAIterator<T | undefined>) {
				
				this.iterator = iterator;
				
			}
			
			public [Symbol.iterator](): IterableIterator<T | undefined> {
				
				return this;
				
			}
			
			public next(): IteratorResult<T | undefined> {
				
				return {
					
					done: !this.iterator.hasNext(),
					value: (this.iterator.hasNext() ? this.iterator.next() : undefined)
					
				};
				
			}
			
		}(this);
	}
	
}

export default TSAIterator;