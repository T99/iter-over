<h1 align="center">iter-over</h1>
<p align="center">
	iter-over is an iteration toolset for JavaScript/TypeScript that provides interfaces as well as utility classes for
	iteration using the native JavaScript <code>Symbol.iterator</code> method (and <code>Symbol.asyncIterator</code>!).
</p>

<h3 align="center"><a href="https://www.npmjs.com/package/iter-over">Find iter-over on NPM.</a></h3>

## Table of Contents

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Documentation](#documentation)
- [License](#license)

## Installation
Install from NPM with
```
$ npm install --save iter-over
```

## Basic Usage
For most use-cases you'll want to extend `AbstractIterator` (the iter-over abstract iterator class). This abstract class
implements such methods as `#forEachRemaining(callback)` and automagically implements the `[Symbol.iterator]` method so
that you don't have to!

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

## Documentation
Full documentation can be found [here](https://t99.github.io/iter-over/)!

## License
iter-over is made available under the GNU General Public License v3.

Copyright (C) 2021 Trevor Sears
