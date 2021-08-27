/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:39 PM -- July 29th, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "../core/abstract-iterator";

/**
 * A utility class for getting a full iter-over iteration context from an otherwise primitive array.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.5.0
 * @since v0.1.0
 */
export class ArrayIterator<E> extends AbstractIterator<E | undefined> {
	
	/**
	 * The array over which this object is iterating.
	 */
	private iterationArray: E[];
	
	/**
	 * The index of the next element that should be returned from {@link ArrayIterator#next}.
	 */
	private cursor: number;
	
	/**
	 * Initializes a new ArrayIterator with the provided array.
	 *
	 * @param {E[]} array The array over which the newly initialized ArrayIterator should iterate.
	 */
	public constructor(array: E[]) {
	
		super();
		
		this.iterationArray = array;
		this.cursor = 0;
	
	}
	
	/**
	 * Returns true if this ArrayIterator has at least one more element that can be returned from {@link #next}.
	 *
	 * @returns {boolean} true if this ArrayIterator has at least one more element that can be returned from
	 * {@link #next}.
	 */
	public hasNext(): boolean {
		
		return (this.cursor < this.iterationArray.length);
		
	}
	
	/**
	 * Returns the next element of the underlying array, or undefined if there are no more elements to consume.
	 *
	 * @return {E | undefined} The next element of the underlying array, or undefined if there are no more elements to
	 * consume.
	 */
	public next(): E | undefined {
		
		if (this.hasNext()) return this.iterationArray[this.cursor++];
		else return undefined;
		
	}
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying array.
	 *
	 * @returns {E | undefined} The last element returned by the #next() method.
	 */
	public remove(): E | undefined {
		
		// TODO [8/23/2021 @ 2:32 PM] This isn't actually removing the underlying element from the array!
		
		if ((this.cursor > 0) && (this.hasNext())) return this.iterationArray[--this.cursor];
		else return undefined;
		
	}
	
	/**
	 * Resets this iterator back to the first element of the underlying array.
	 */
	public reset(): void {
		
		this.cursor = 0;
		
	}
	
}
