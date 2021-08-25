# The Basics/Utility Classes/`StringCharacterIterator`

!!! help "Reference Documentation"
    Find reference documentation for `StringCharacterIterator`
    [here](/iter-over/reference/utility-classes/string-character-iterator/), or navigate to it via the
    ['Reference'](/iter-over/reference/) tab.

StringCharacterIterator iterates over the characters of a provided input string.

```typescript
let iter: StringCharacterIterator = new StringCharacterIterator("Hello!");

for (let character of iter) console.log(character);

// Prints 'H', 'e', 'l', 'l', 'o', '!'.
```
