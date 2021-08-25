/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:45 PM -- December 16th, 2018.
 *	Project: iter-over
 */

import { AbstractIterator } from "../core/abstract-iterator";

type StringIndexedObject = {
	[property: string]: any
};


/**
 * A key-value data pair.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v2.0.0
 * @since v0.1.0
 */
export type KeyValuePair<K, V> = {
	
	readonly key: K;
	
	readonly value: V;
	
}

/**
 * A union over the possible types of values that are stored in the specified type.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v2.0.0.
 * @since v2.0.0
 */
type ValueOf<T> = T[keyof T];

/**
 * An iterator that iterates over the keys of an object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v2.0.0
 * @since v0.1.0
 */
export class ObjectIterator<T extends StringIndexedObject = any> extends AbstractIterator<KeyValuePair<keyof T, ValueOf<T>>> {
	
	/**
	 * The content (object) that this ObjectIterator is iterating over.
	 */
	private readonly content: T;
	
	/**
	 * The keys of the associated object that will be iterated over by this ObjectIterator.
	 */
	private readonly keys: (keyof T)[];
	
	/**
	 * The index of the next key that could be returned by this ObjectIterator.
	 */
	private index: number = 0;
	
	/**
	 * Initializes a new ObjectIterator object with the specified object.
	 *
	 * @param {T} content The content (object) that this ObjectIterator should iterate over.
	 */
	public constructor(content: T) {
		
		super();
		
		this.content = content;
		
		if ((this.content !== null) && (this.content !== undefined)) {
			
			this.keys = Object.keys(this.content) as (keyof T)[];
			
		} else this.keys = [];
		
	}
	
	/**
	 * Returns true if this iterator has at least one more element that can be returned from {@link #next}.
	 *
	 * @returns {boolean} true if this iterator has at least one more element that can be returned from {@link #next}.
	 */
	public hasNext(): boolean {
		
		return (this.index < this.keys.length);
		
	}
	
	/**
	 * Returns the next KeyValuePair that this ObjectIterator has to iterate over.
	 *
	 * @returns {KeyValuePair<keyof T, ValueOf<T>>} The next KeyValuePair this ObjectIterator has.
	 */
	public next(): KeyValuePair<keyof T, ValueOf<T>> {
		
		let key: keyof T = this.keys[this.index++];
		let value: ValueOf<T> = this.content[key];
		
		return { key, value };
		
	}
	
	/**
	 * Removes and returns the last element returned by the #next() method from the underlying object.
	 *
	 * @returns {KeyValuePair<keyof T, ValueOf<T>> | undefined} The last element returned by the #next() method.
	 */
	public remove(): KeyValuePair<keyof T, ValueOf<T>> | undefined {
		
		// TODO [8/20/2021 @ 1:39 PM] Test if this function actually successfully modifies the value as a reference
		//                            rather than a copy.
		
		if (this.index > 0) {
			
			let key: keyof T = this.keys[--this.index];
			let value: ValueOf<T> = this.content[key];
			let result: KeyValuePair<keyof T, ValueOf<T>> = { key, value };
			
			delete this.content[key];
			
			return result;
			
		} else return undefined;
		
	}
	
	/**
	 * Resets this ObjectIterator back to it's initial position, readying it to iterate over the underlying object from
	 * the 'beginning' again.
	 */
	public reset(): void {
		
		this.index = 0;
		
	}
	
}
