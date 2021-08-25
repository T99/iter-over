/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:31 PM -- June 21st, 2019.
 *	Project: iter-over
 */

import { AbstractIterator } from "./abstract-iterator";

/**
 * An iterator that iterates over the lines in a string.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.2.0
 * @since v1.2.0
 */
export class StringLineIterator extends AbstractIterator<string> {
	
	private content: string;
	
	private lineBreakCharacter: string;
	
	private substringStartIndex: number;
	
	private substringEndIndex: number;
	
	public constructor(content: string) {
		
		super();
		
		this.content = content;
		this.lineBreakCharacter = StringLineIterator.determineLineBreakStyle(this.content);
		this.substringStartIndex = 0;
		this.substringEndIndex = 0;
		
	}
	
	/**
	 * Returns a best-guess approximation of the line break character sequence being used by the provided string.
	 *
	 * This function was nabbed from <a href="https://github.com/T99/http-js/blob/dc327057e6ae2e4af9ff14711606a05fa1d8f82f/ts/util/determine-line-break-style.ts">@T99/http-js/util/determine-line-break-style.ts</a>.
	 *
	 * @param {string} input The string for which to attempt to determine a line-break style.
	 * @returns {string} The character sequence that this function believes serves as the line-break style for the
	 * provided input string.
	 */
	protected static determineLineBreakStyle(input: string): string {
		
		let indexOfLineFeed: number = input.indexOf("\n");
		
		// Line-feed character not found...
		if (indexOfLineFeed === -1) {
			
			// If we can find a carriage-return character, that must be the intended line-break style.
			if (input.indexOf("\r") !== -1) return "\r";
			
			// No line break characters found... default to "\r\n" because that is the line-break in the spec.
			else return "\r\n";
			
			// Found a line-feed character...
		} else {
			
			// We found a "\r\n" character sequence, that must be the intended line-break style.
			if (input.charAt(indexOfLineFeed - 1) === "\r") return "\r\n";
				
				// The line-feed character we found was not preceded by a carriage-return, so the intended line-break
			// style must just be a plain line-feed character.
			else return "\n";
			
		}
	
	}
	
	protected findNextLineBreak(): void {
	
	
	
	}
	
	public hasNext(): boolean {
		
		return (this.index < this.content.length);
		
	}
	
	public next(): string {
		
		let substring: string = this.content[this.index++];
		
		return substring.trim();
		
	}
	
	public remove(): string | undefined {
		
		return undefined;
		
	}
	
	public reset(): void {
		
		this.index = 0;
		
	}
	
}
