/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:39 PM -- July 29th, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "./abstract-iterator";

/**
 * A utility class for getting a full iter-over iteration context from an otherwise primitive array.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class ArrayIterator<E> extends AbstractIterator<E> {
	
	private iterationArray: E[];
	
	private cursor: number;
	
	public constructor(array: E[]) {
	
		super();
		
		this.iterationArray = array;
		this.cursor = 0;
	
	}
	
	public hasNext(): boolean {
		
		return (this.cursor < this.iterationArray.length);
		
	}
	
	public next(): E {
		
		return this.iterationArray[this.cursor++];
		
	}
	
}