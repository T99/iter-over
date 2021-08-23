# The Basics/Utility Classes/`EmptyIterator`

Rarely, it is semantically useful to have an empty iterator that follows the iterator pattern but will never have
content.

```typescript
let iter: EmptyIterator = new EmptyIterator();

console.log(iter.hasNext());

// Prints 'false'.
```
