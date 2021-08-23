# The Basics/Utility Classes/`ObjectIterator`

How many times have you typed out the classic `for (let prop of Object.keys(myObj)) ...` mantra? More than three times?
Yeah, me too. Here's an easy way to loop over the key-value pairs present in an object:

```typescript
let props: ObjectIterator<Person> = new ObjectIterator(jasonBourne);

for (let kvPair of props) console.log(`${kvPair.key}: ${kvPair.value}`);

// 'firstName: Jason'
// 'lastName: Bourne'
// 'middleInitial: F'
```

## The Simple Stuff

If you hadn't figured it out from that example, `ObjectIterator` instances provide the ability to iterate over the
key-value pairs of a provided input object, returning [`KeyValuePair`s][keyvaluepair].

[keyvaluepair]: https://github.com/T99/iter-over/blob/f6cc1c043b062f50c5c42d9485618fea8bef37bf/ts/object-iterator.ts#L21

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

//	'{ key: "key1", value: "value 1" }'
//	'{ key: "key2", value: 2 }'
//	'{ key: "key3", value: false }'
//	'{ key: "key4", value: { innerKey: "innerVal" } }'
```

## Type Support

As we alluded to in the first example on this page, if you have more strictly-typed objects you can also pass a type to
ObjectIterator.

```typescript
type Car = {
	name: string,
	price: number,
	horn: string
}

let iter: ObjectIterator<Car> = new ObjectIterator({
	name: "Persephone",
	price: 82000,
	horn: "La Cucaracha"
});

for (let kvPair of iter) console.log(kvPair);

// Prints...
//	'{ key: "name", value: "Persephone" }',
//	'{ key: "price", value: 82000 }',
//	'{ key: "horn", value: "La Cucaracha" }'
```

## A Word of Warning

One small hiccup - in JavaScript, every object (**_every_** object) stores its keys as strings. This means that, when
attempting to use an object that has (read: appears to have) numeric keys, the keys will be 'coerced' into strings.

I put air quotes around 'coerced' because there isn't actually any type coercion occurring - the keys were always
strings.

The only time actual number-to-string coercion occurs is when an array is passed to the `ObjectIterator` constructor. In
this situation, the indices of the elements of the provided array will be returned as strings:

```typescript
let iter: ObjectIterator = new ObjectIterator([
	"Oh",
	"jeez",
	"Scoob"
]);

for (let kvPair of iter) console.log(kvPair);

//	'{ key: "0", value: "Oh" }',
//	'{ key: "1", value: "jeez" }',
//	'{ key: "2", value: "Scoob" }'
```
