# Reference/Utility Classes/`ArrayIterator`

A utility class for getting a full iter-over iteration context from an otherwise primitive array.

!!! help "How-To/Usage Guide"
    Find a how-to/usage guide for the `ArrayIterator` [here](/iter-over/basics/utility-classes/array-iterator/) class,
    or navigate to it via the ['The Basics'](/iter-over/basics/) tab.

---

## Class Signature

**Description** <br />
A utility class for getting a full iter-over iteration context from an otherwise primitive array.

**Generic Arguments** <br />
- `E` [`#!typescript any`] The type of element contained in the underlying array.

**Initial Version** `v0.1.0` <br />
**Latest Version** `v2.1.0`

```typescript
abstract class AbstractIterator<E> implements IIterator<E | undefined>
```

---

## Inheritance

=== "Extends"

    Direct:

    - [`AbstractIterator`](/iter-over/reference/core/abstract-iterator/): A generic iterator very similar to the pattern
      used in Java.

    Indirect:

    - _none_

=== "Implements"

    Direct:

    - [`IIterator`](/iter-over/reference/core/i-iterator/): An interface representing the general form of an iterable
      class.

    Indirect:

    - _none_

=== "Subclasses"

    Direct:

    - _none_

    Indirect:

    - _none_

---

## Instance Method Signatures

### `#hasNext`

**Description** <br />
Returns `true` if this iterator has at least one more element that can be returned from [`next()`](#next).

**Returns** [`#!typescript boolean`] `true` if this iterator has at least one more element that can be returned from
[`next()`](#next). <br />
**Overrides** [`AbstractIterator#hasNext`](/iter-over/reference/core/abstract-iterator/#hasnext)

```typescript
public hasNext(): boolean
```

---

### `#next`

**Description** <br />
Returns the next element of the underlying array, or `undefined` if there are no more elements to consume.

**Returns** [`#!typescript E | undefined`] The next element of the underlying array, or `undefined` if there are no more
elements to consume. <br />
**Overrides** [`AbstractIterator#next`](/iter-over/reference/core/abstract-iterator/#next)

```typescript
public next(): E | undefined
```

---

### `#remove`

**Description** <br />
Removes and returns the last element returned by the [`next()`](#next) method from the underlying array.

**Returns** [`#!typescript E | undefined`] The last element returned by the [`next()`](#next) method. <br />
**Overrides** [`AbstractIterator#remove`](/iter-over/reference/core/abstract-iterator/#remove)

```typescript
public remove(): E | undefined
```

---

### `#reset`

**Description** <br />
Resets this iterator back to the first element of the underlying array.

**Overrides** [`AbstractIterator#reset`](/iter-over/reference/core/abstract-iterator/#reset)

```typescript
public reset(): void
```
