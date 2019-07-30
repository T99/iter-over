/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:30 AM -- June 16th, 2019.
 *	Project: iter-over
 */

import { ObjectIterator } from "../object-iterator";

describe("Basic Object Iteration", () => {
	
	test("Simple Object", () => {
		
		let obj: any = {
			
			name: "Trevor",
			time: 0,
			money: false
			
		};
		
		let iter: ObjectIterator<any> = new ObjectIterator<any>(obj);
		
		expect(iter.hasNext()).toBeTruthy();
		expect(iter.next()).toStrictEqual({ key: "name", value: "Trevor" });
		
		expect(iter.hasNext()).toBeTruthy();
		expect(iter.next()).toStrictEqual({ key: "time", value: 0 });
		
		expect(iter.hasNext()).toBeTruthy();
		expect(iter.next()).toStrictEqual({ key: "money", value: false });
		
		expect(iter.hasNext()).toBeFalsy();
		expect(iter.next()).toStrictEqual({ key: undefined, value: undefined });
		
	});
	
	test("Array Object", () => {
		
		let arr: any[] = [
			"Hello",
			1,
			false
		];
		
		let iter: ObjectIterator<any> = new ObjectIterator<any>(arr);
		
		expect(iter.hasNext()).toBeTruthy();
		expect(iter.next()).toStrictEqual({ key: "0", value: "Hello" });
		
		expect(iter.hasNext()).toBeTruthy();
		expect(iter.next()).toStrictEqual({ key: "1", value: 1 });
		
		expect(iter.hasNext()).toBeTruthy();
		expect(iter.next()).toStrictEqual({ key: "2", value: false });
		
		expect(iter.hasNext()).toBeFalsy();
		expect(iter.next()).toStrictEqual({ key: undefined, value: undefined });
		
	});
	
	test("[Symbol.iterator]", () => {
		
		let obj: any = {
			
			name: "Trevor",
			time: 0,
			money: false
			
		};
		
		let iter: ObjectIterator = new ObjectIterator(obj);
		let item: number = 0;
		
		for (let kvPair of iter) {
			
			switch (item) {
				
				case 0:
					expect(iter.hasNext()).toBeTruthy();
					expect(kvPair).toStrictEqual({ key: "name", value: "Trevor" });
					break;
				
				case 1:
					expect(iter.hasNext()).toBeTruthy();
					expect(kvPair).toStrictEqual({ key: "time", value: 0 });
					break;
				
				case 2:
					expect(iter.hasNext()).toBeFalsy();
					expect(kvPair).toStrictEqual({ key: "money", value: false });
					break;
					
				default:
					fail("Switch statement should not reach this case statement.");
				
			}
			
			item++;
			
		}
		
	});
	
});