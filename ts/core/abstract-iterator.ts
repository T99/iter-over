/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:21 AM -- December 07th, 2018.
 *	Project: iter-over
 */

import { IIterator } from "./i-iterator";

/**
 * A generic iterator very similar to the pattern used in Java.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.5.0
 * @since v0.1.0
 */
export abstract class AbstractIterator<E> implements IIterator<E> {
	
	/**
	 * Returns true if this iterator has at least one more element that can be returned from {@link #next}.
	 *
	 * @returns {boolean} true if this iterator has at least one more element that can be returned from {@link #next}.
	 */
	public abstract hasNext(): boolean;
	
	/**
	 * Returns the next element this AbstractIterator has to iterate over.
	 *
	 * @returns {E | undefined} The next element this AbstractIterator has.
	 */
	public abstract next(): E;
	
	/**
	 * Performs the specified action for all of the remaining elements in this AbstractIterator.
	 *
	 * @param {(element: E) => void} callback The action to perform on the remaining elements of this AbstractIterator.
	 */
	public forEachRemaining(callback: (element: E) => void): void {
		
		while (this.hasNext()) callback(this.next() as E);
		
	}
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying data structure.
	 *
	 * @returns {E | undefined} The last element returned by the #next() method.
	 */
	public remove(): E | undefined {
		
		throw new Error("ERR | #remove() operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	/**
	 * Resets this AbstractIterator back to it's initial position, readying it to iterate over the underlying collection from
	 * the 'beginning' again.
	 */
	public reset(): void {
		
		throw new Error("ERR | #reset() operation is not supported for this implementation of AbstractIterator.");
		
	}
	
	public [Symbol.iterator](): IterableIterator<E> {
		
		return new class implements IterableIterator<E> {
			
			private iterator: AbstractIterator<E>;
			
			public constructor(iterator: AbstractIterator<E>) {
				
				this.iterator = iterator;
				
			}
			
			public [Symbol.iterator](): IterableIterator<E> {
				
				return this;
				
			}
			
			public next(): IteratorResult<E> {
				
				return {
					
					done: !this.iterator.hasNext(),
					value: this.iterator.next() as E
					
				};
				
			}
			
		}(this);
		
	}
	
	public getIterableIterator(): IterableIterator<E> {
		
		return this[Symbol.iterator]();
		
	}
	
}
