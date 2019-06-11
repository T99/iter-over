/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:45 PM -- December 16th, 2018.
 *	Website: dashboard.ampelfeedback.com
 */

import { IOAIterator } from "./io-a-iterator";
import { IOKeyValuePair } from "./io-key-value-pair";

/**
 * A IOAIterator that iterates over the keys of an object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export class IOObjectIterator<E = any> extends IOAIterator<IOKeyValuePair<string, E>> {
	
	private content: any;
	private keys: string[];
	private index: number = 0;
	
	public constructor(content: any) {
		
		super();
		
		this.content = content;
		
		if ((this.content !== null) && (this.content !== undefined)) {
			
			this.keys = Object.keys(this.content);
			
		} else this.keys = [];
		
	}
	
	public hasNext(): boolean {
		
		return (this.index < this.keys.length);
		
	}
	
	public next(): IOKeyValuePair<string, E> {
		
		let key: string = this.keys[this.index++];
		let value: E = this.content[key];
		
		return { key, value };
		
	}
	
	public remove(): IOKeyValuePair<string, E> | undefined{
		
		if (this.index > 0) {
			
			let key: string = this.keys[--this.index];
			let value: E = this.content[key];
			let result: IOKeyValuePair<string, E> = { key, value };
			
			delete this.content[key];
			
			return result;
			
		} else {
			
			return undefined;
			
		}
		
	}
	
	public reset(): void {
		
		this.index = 0;
		
	}
	
}