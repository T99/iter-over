# The Basics/Utility Classes

There are a handful of utility classes provided with iter-over that come ready-to-use.

## [`EmptyIterator`](/iter-over/basics/utility-classes/empty-iterator/)

Want an empty iterator that doesn't return any content? This is the iterator for you!

```typescript
let empty: EmptyIterator = new EmptyIterator();

empty.hasNext() // 'false'
empty.next() // 'undefined'
```

Seems useless, but in a way, that's kind of the point. Rarely, it happens to be semantically useful to have an iterator
that does nothing. :shrug:

## [`ObjectIterator`](/iter-over/basics/utility-classes/object-iterator/)

How many times have you typed out the classic `for (let prop of Object.keys(myObj)) ...` mantra? More than three times?
Yeah, me too. Here's an easy way to loop over the key-value pairs present in an object:

```typescript
let props: ObjectIterator<Person> = new ObjectIterator(jasonBourne);

for (let kvPair of props) console.log(`${kvPair.key}: ${kvPair.value}`);

// 'firstName: Jason'
// 'lastName: Bourne'
// 'middleInitial: F'
```
