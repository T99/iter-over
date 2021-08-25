/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:48 PM -- April 15th, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "./abstract-iterator";

/**
 * An empty iterator.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v2.0.0
 * @since v0.1.0
 */
export class EmptyIterator extends AbstractIterator<undefined> {
	
	public hasNext(): false {
		
		return false;
		
	}
	
	public next(): undefined {
		
		return undefined;
		
	}
	
	public remove(): undefined {
		
		return undefined;
		
	}
	
	public reset(): void {
		
		return;
		
	}

}
