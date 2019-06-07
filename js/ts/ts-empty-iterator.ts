/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:48 PM -- April 15th, 2019.
 *	Website: dashboard.ampelfeedback.com
 */

import TSAIterator from "ts-a-iterator.js";

/**
 * An empty iterator.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
class TSEmptyIterator extends TSAIterator<any> {
	
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

export default TSEmptyIterator;