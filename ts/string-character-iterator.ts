/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:16 PM -- May 18th, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "./abstract-iterator";

/**
 * An AbstractIterator that iterates over the characters in a string.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export class StringCharacterIterator extends AbstractIterator<string> {
	
	private content: string;
	
	private index: number;
	
	public constructor(content: string) {
	
		super();
		
		this.content = content;
		this.index = 0;
	
	}
	
	public hasNext(): boolean {
		
		return (this.index < this.content.length);
		
	}
	
	public next(): string {
		
		return this.content.substring(this.index, ++this.index);
		
	}
	
	public remove(): string | undefined {
		
		return undefined;
		
	}
	
	public reset(): void {
	
		this.index = 0;
	
	}
	
}