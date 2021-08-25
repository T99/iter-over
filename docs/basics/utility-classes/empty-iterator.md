# The Basics/Utility Classes/`EmptyIterator`

!!! help "Reference Documentation"
    Find reference documentation for `EmptyIterator` [here](/iter-over/reference/utility-classes/empty-iterator/), or
    navigate to it via the ['Reference'](/iter-over/reference/) tab.

Rarely, it is semantically useful to have an empty iterator that follows the iterator pattern but will never have
content.

```typescript
let iter: EmptyIterator = new EmptyIterator();

console.log(iter.hasNext());

// Prints 'false'.
```
