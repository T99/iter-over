# The Basics/Utility Classes/`StringLineIterator`
StringLineIterator iterates over the lines of a provided input string.

```typescript
let iter: StringLineIterator = new StringLineIterator(`Hello
there,
world!`);

for (let line of iter) console.log(line);

// Prints 'Hello', 'there,', 'world!'.
```
