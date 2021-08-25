# Reference/Utility Classes/`AbstractIterator`

A generic iterator very similar to the pattern used in Java.

---

## Class Signature

**Description** <br />
A generic iterator very similar to the pattern used in Java.

**Generic Arguments** <br />
 - `E` [`#!typescript any`] The type of element which will be returned during iteration over this object.

**Initial Version** `v0.1.0` <br />
**Latest Version** `v1.5.0`

```typescript
abstract class AbstractIterator<E> implements IIterator<E>
```

---

## Inheritance

=== "Extends"

    Direct:

    - _none_

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
    
    - [`ArrayIterator`](/iter-over/reference/utility-classes/array-iterator/): Add tagline.
    - [`AsyncIterator`](/iter-over/reference/utility-classes/async-iterator/): Add tagline.
    - [`EmptyIterator`](/iter-over/reference/utility-classes/empty-iterator/): Add tagline.
    - [`ObjectIterator`](/iter-over/reference/utility-classes/object-iterator/): Add tagline.
    - [`StringCharacterIterator`](/iter-over/reference/utility-classes/string-character-iterator/): Add tagline.
    - [`StringLineIterator`](/iter-over/reference/utility-classes/string-line-iterator/): Add tagline.

    Indirect:

    - _none_

---

## Abstract Instance Method Signatures

### `#hasNext`

**Description** <br />
Returns `true` if this iterator has at least one more element that can be returned from [`next()`](#next).

**Returns** [`#!typescript boolean`] `true` if this iterator has at least one more element that can be returned from
[`next()`](#next). <br />
**Implements** [`IIterator#hasNext`](/iter-over/reference/core/i-iterator/#hasnext)

```typescript
public abstract hasNext(): boolean
```

---

### `#next`

**Description** <br />
Returns the next element this `AbstractIterator` has to iterate over.

**Returns** [`#!typescript E`] The next element this `AbstractIterator` has. <br />
**Implements** [`IIterator#next`](/iter-over/reference/core/i-iterator/#next)

```typescript
public abstract next(): E
```

---

## Concrete Instance Method Signatures

### `#forEachRemaining`

**Description** <br />
Performs the specified action for all of the remaining elements in this `AbstractIterator`.

**Parameters** <br />
 - `callback` [`#!typescript (element: E) => void`] The action to perform on the remaining elements of this
`AbstractIterator`.

**Implements** [`IIterator#forEachRemaining`](/iter-over/reference/core/i-iterator/#foreachremaining)

```typescript
public forEachRemaining(callback: (element: E) => void): void
```

---

### `#remove`

**Description** <br />
Removes and returns the last element returned by the [`next()`](#next) method from the underlying data structure.

**Returns** [`#!typescript E | undefined`] The last element returned by the [`next()`](#next) method. <br />
**Implements** [`IIterator#remove`](/iter-over/reference/core/i-iterator/#remove)

```typescript
public remove(): E | undefined
```

---

### `#reset`

**Description** <br />
Resets this AbstractIterator back to it's initial position, readying it to iterate over the underlying collection from
the 'beginning' again.

**Implements** [`IIterator#reset`](/iter-over/reference/core/i-iterator/#reset)

```typescript
public reset(): void
```

---

### `#[Symbol.iterator]`

**Implements** [`IIterator#[Symbol.iterator]`](/iter-over/reference/core/i-iterator/#symboliterator)

```typescript
public [Symbol.iterator](): IterableIterator<E>
```

---

### `#getIterableIterator`

**Implements** [`IIterator#getIterableIterator`](/iter-over/reference/core/i-iterator/#getiterableiterator)

```typescript
public getIterableIterator(): IterableIterator<E>
```
