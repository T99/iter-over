# The Basics/Utility Classes/`StringLineIterator`

!!! help "Reference Documentation"
    Find reference documentation for `StringLineIterator`
    [here](/iter-over/reference/utility-classes/string-line-iterator/), or navigate to it via the
    ['Reference'](/iter-over/reference/) tab.

StringLineIterator iterates over the lines of a provided input string.

```typescript
let iter: StringLineIterator = new StringLineIterator(`Hello
there,
world!`);

for (let line of iter) console.log(line);

// Prints 'Hello', 'there,', 'world!'.
```
