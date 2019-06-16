/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:21 AM -- December 07th, 2018.
 *	Website: dashboard.ampelfeedback.com
 */

import { IIterator } from "./i-iterator";

/**
 * A generic iterator very similar to the pattern used in Java.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export abstract class AbstractIterator<T> implements IIterator<T> {
	
	/**
	 * Returns true if a call to #next() would return a meaningful result after calling this method.
	 *
	 * @returns {boolean} true if a call to #next() would return a meaningful result.
	 */
	public abstract hasNext(): boolean;
	
	/**
	 * Returns the next element this AbstractIterator has to iterate over.
	 *
	 * @returns {T} The next element this AbstractIterator has.
	 */
	public abstract next(): T | undefined;
	
	/**
	 * Performs the specified action for all of the remaining elements in this AbstractIterator.
	 *
	 * @param {(element: T) => void} callback The action to perform on the remaining elements of this AbstractIterator.
	 */
	public forEachRemaining(callback: (element: T) => void): void {
		
		while (this.hasNext()) callback(this.next() as T);
		
	}
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @returns {T} The last element returned by the #next() method.
	 */
	public remove(): T | undefined {
		
		throw new Error("ERR | #remove() operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	/**
	 * Resets this AbstractIterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 */
	public reset(): void {
		
		throw new Error("ERR | #reset() operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	public [Symbol.iterator](): IterableIterator<T> {
		
		return new class implements IterableIterator<T> {
			
			private iterator: AbstractIterator<T>;
			
			private hadFinalIteration: boolean = false;
			
			public constructor(iterator: AbstractIterator<T>) {
				
				this.iterator = iterator;
				
			}
			
			public [Symbol.iterator](): IterableIterator<T> {
				
				return this;
				
			}
			
			public next(): IteratorResult<T> {
				
				if (!this.hadFinalIteration) {
					
					if (!this.iterator.hasNext()) this.hadFinalIteration = true;
					
					return {
						
						done: !this.iterator.hasNext(),
						value: this.iterator.next() as T
						
					};
					
				} else {
					
					throw new Error("ERR | Attempted to call #next on an Iterator that did not have another " +
						"well-defined value.");
					
				}
				
			}
			
		}(this);
	}
	
}