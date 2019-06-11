/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:45 PM -- December 16th, 2018.
 *	Website: dashboard.ampelfeedback.com
 */

import { AbstractIterator } from "./abstract-iterator";
import { KeyValuePair } from "./key-value-pair";

/**
 * A AbstractIterator that iterates over the keys of an object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export class ObjectIterator<E = any> extends AbstractIterator<KeyValuePair<string, E>> {
	
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
	
	public next(): KeyValuePair<string, E> {
		
		let key: string = this.keys[this.index++];
		let value: E = this.content[key];
		
		return { key, value };
		
	}
	
	public remove(): KeyValuePair<string, E> | undefined {
		
		if (this.index > 0) {
			
			let key: string = this.keys[--this.index];
			let value: E = this.content[key];
			let result: KeyValuePair<string, E> = { key, value };
			
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