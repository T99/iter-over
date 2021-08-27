import { AbstractIterator } from "../core/abstract-iterator";

type ExternallyResolveablePromise<T, R = any> = {
	promise: Promise<T>;
	resolve: (value: T) => void;
	reject: (value: R) => void;
};

/**
 * A utility class for asynchronously iterating over a collection of Promises as they resolve.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v2.1.0
 * @since v0.1.0
 */
export class AsyncIterator<T> extends AbstractIterator<Promise<T | undefined>, void> {
	
	private promiseIndex: number = 0;
	
	private readonly promiseStatusIndicators: ExternallyResolveablePromise<T>[];
	
	private readonly settledPromises: Promise<T>[];
	
	public constructor(promises: Promise<T>[]) {
		
		super();
		
		this.promiseStatusIndicators = [];
		this.settledPromises = [];
		
		for (let i: number = 0; i < promises.length; i++) {
			
			let resolve!: ExternallyResolveablePromise<T>["resolve"];
			let reject!: ExternallyResolveablePromise<T>["reject"];
			
			let statusPromise: Promise<T> = new Promise<T>(
				(resolveFunction: (value: T) => void, rejectFunction: (value: any) => void): void => {
				
				resolve = resolveFunction;
				reject = rejectFunction;
				
			});
			
			this.promiseStatusIndicators[i] = {
				promise: statusPromise,
				resolve,
				reject
			};
			
			promises[i].then((fulfillmentValue: T): void => {
				
				let length: number = this.settledPromises.push(promises[i]);
				this.promiseStatusIndicators[length - 1].resolve(fulfillmentValue);
				
			}, (rejectionValue: any): void => {
				
				let length: number = this.settledPromises.push(promises[i]);
				this.promiseStatusIndicators[length - 1].reject(rejectionValue);
			
			});
			
		}
		
	}
	
	public hasNext(): boolean {
		
		return (this.promiseIndex < this.promiseStatusIndicators.length);
		
	}
	
	public async next(): Promise<T | undefined> {
		
		if (!this.hasNext()) return undefined;
		
		await this.promiseStatusIndicators[this.promiseIndex].promise;
		
		return this.settledPromises[this.promiseIndex++];
		
	}
	
	public remove(): Promise<T | undefined> {
		
		return undefined as any;
		
	}
	
	public reset(): void {
		
		this.promiseIndex = 0;
		
	}
	
	public [Symbol.asyncIterator](): AsyncIterableIterator<T> {
		
		return new class implements AsyncIterableIterator<T> {
			
			private iterator: AsyncIterator<T>;
			
			public constructor(iterator: AsyncIterator<T>) {
				
				this.iterator = iterator;
				
			}
			
			public [Symbol.asyncIterator](): AsyncIterableIterator<T> {
				
				return this;
				
			}
			
			public async next(): Promise<IteratorResult<T, undefined>> {
				
				if (this.iterator.hasNext()) {
					
					return {
						done: false,
						value: await this.iterator.next() as T
					};
					
				} else {
					
					return {
						done: true,
						value: undefined
					};
					
				}
			
			}
			
		}(this);
		
	}
	
	public getAsyncIterableIterator(): AsyncIterableIterator<T> {
		
		return this[Symbol.asyncIterator]();
		
	}

}
