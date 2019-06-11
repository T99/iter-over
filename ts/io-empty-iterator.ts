/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:48 PM -- April 15th, 2019.
 *	Website: dashboard.ampelfeedback.com
 */

import { IOAIterator } from "./io-a-iterator.js";

/**
 * An empty iterator.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export class IOEmptyIterator extends IOAIterator<any> {
	
	public hasNext(): boolean {
		
		return false;
		
	}
	
	public next(): any {
		
		return undefined;
		
	}
	
	public remove(): any {
		
		return undefined;
		
	}
	
	public reset(): void {
		
		return;
		
	}

}