/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:31 PM -- June 21st, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "./abstract-iterator";

/**
 * An AbstractIterator that iterates over the lines in a string.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.2.0
 * @since v1.2.0
 */
export class StringLineIterator extends AbstractIterator<string> {
	
	private content: string[];
	
	private index: number;
	
	public constructor(content: string) {
		
		super();
		
		this.content = content.trim().split(/\r\n|\r|\n/);
		this.index = 0;
		
	}
	
	public hasNext(): boolean {
		
		return (this.index < this.content.length);
		
	}
	
	public next(): string {
		
		let content: string = this.content[this.index++];
		
		if (typeof content === "string") return content.trim();
		else return content;
		
	}
	
	public remove(): string | undefined {
		
		return undefined;
		
	}
	
	public reset(): void {
		
		this.index = 0;
		
	}
	
}