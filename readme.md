# iter-over
iter-over is an iteration toolset for JavaScript/TypeScript that provides interfaces as well as utility classes for iteration using the native JavaScript `Symbol.iterator` method.

### [Find iter-over on NPM.](https://www.npmjs.com/package/iter-over)

## Installation
Install from NPM with
```
$ npm install --save iter-over
```

## Basic Usage
For most use-cases you'll want to extend `AbstractIterator` (the iter-over abstract iterator class). This abstract class implements such methods as `#forEachRemaining(callback)` and automagically implements the `[Symbol.iterator]` method so that you don't have to!

The only methods you have to implement are:

```typescript
public hasNext(): boolean { ... }
public next(): E | undefined { ... }
```

So for example, an inline implementation would look something like:

```typescript
import { AbstractIterator } from "iter-over";

class MyCounter extends AbstractIterator<number> {

	private val: number = 0;
	
	public hasNext(): boolean {
		
		return (this.val <= 9);
		
	}
	
	public next(): number {
		
		return this.val++;
		
	}
	
}
```

Once you've done that, you can freely use the iterator as such:

```typescript
let counter: MyCounter = new MyCounter();

for (let counterVal of counter) console.log(counterVal);

// ...console logs 0 through 9.
```

## Utility Classes
There are a handful of utility classes provided with iter-over that are all ready for you to use.

### StringCharacterIterator
StringCharacterIterator iterates over the characters of a provided input string.

```typescript
let iter: StringCharacterIterator = new StringCharacterIterator("Hello!");

for (let character of iter) console.log(character);

// Prints 'H', 'e', 'l', 'l', 'o', '!'.
```

### StringLineIterator
StringLineIterator iterates over the lines of a provided input string.

```typescript
let iter: StringLineIterator = new StringLineIterator(`Hello
there,
world!`);

for (let line of iter) console.log(line);

// Prints 'Hello', 'there,', 'world!'.
```

### ObjectIterator
ObjectIterator iterates over the key-value pairs of a provided input object, returning IOKeyValuePairs from `#next()`.

```typescript
let iter: ObjectIterator = new ObjectIterator({
	key1: "value 1",
	key2: 2,
	key3: false,
	key4: {
		innerKey: "innerVal"
	}
});

for (let kvPair of iter) console.log(kvPair);

// Prints...
//	'{ key: "key1", value: "value 1" }',
//	'{ key: "key2", value: 2 }',
//	'{ key: "key3", value: false }',
//	'{ key: "key4", value: { innerKey: "innerVal" } }'
```

If you have more strictly-typed objects you can also pass a type to ObjectIterator.

```typescript
let iter: ObjectIterator<number> = new ObjectIterator<number>({
	key1: 0,
	key2: 11,
	key3: 42
});

for (let kvPair of iter) console.log(kvPair);

// Prints...
//	'{ key: "key1", value: 0 }',
//	'{ key: "key2", value: 11 }',
//	'{ key: "key3", value: 42 }'
```

### EmptyIterator
Sometimes it is semantically useful to have an empty iterator that follows the iterator pattern but will never have content.

```typescript
let iter: EmptyIterator = new EmptyIterator();

console.log(iter.hasNext());

// Prints 'false'.
```

## License
iter-over is made available under the GNU General Public License v3.

Copyright (C) 2019 Trevor Sears