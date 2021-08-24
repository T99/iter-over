# Reference/Utility Classes/`IIterator`

An interface representing the general form of an iterable class.

---

## Interface Signature

**Description** <br />
An interface representing the general form of an iterable class.

**Generic Arguments** <br />
- `E` [`#!typescript any`] The type of element which will be returned during iteration over this object.

**Initial Version** `v0.1.0` <br />
**Latest Version** `v1.5.0`

```typescript
interface IIterator<E>
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

    - _none_

    Indirect:

    - _none_

=== "Implementations"

    Direct:

    - [`AbstractIterator`](/iter-over/reference/core/abstract-iterator/): A generic iterator very similar to the pattern
      used in Java.

    Indirect:

    - [`ArrayIterator`](/iter-over/reference/utility-classes/array-iterator/): Add tagline.
    - [`AsyncIterator`](/iter-over/reference/utility-classes/async-iterator/): Add tagline.
    - [`EmptyIterator`](/iter-over/reference/utility-classes/empty-iterator/): Add tagline.
    - [`ObjectIterator`](/iter-over/reference/utility-classes/object-iterator/): Add tagline.
    - [`StringCharacterIterator`](/iter-over/reference/utility-classes/string-character-iterator/): Add tagline.
    - [`StringLineIterator`](/iter-over/reference/utility-classes/string-line-iterator/): Add tagline.

---

## Interface Method Signatures

### `#hasNext`

**Description** <br />
Returns `true` if this iterator has at least one more element that can be returned from [`next()`](#next).

**Returns** [`#!typescript boolean`] `true` if this iterator has at least one more element that can be returned from
[`next()`](#next).

```typescript
hasNext(): boolean
```

---

### `#next`

**Description** <br />
Returns the next element this `IIterator` has to iterate over.

**Returns** [`#!typescript E | undefined`] The next element this `IIterator` has.

```typescript
next(): E | undefined
```

---

### `#forEachRemaining`

**Description** <br />
Performs the specified action for all of the remaining elements in this `IIterator`.

**Parameters** <br />
- `callback` [`#!typescript (element: E) => void`] The action to perform on the remaining elements of this
  `IIterator`.

```typescript
forEachRemaining(callback: (element: E) => void): void
```

---

### `#remove`

**Description** <br />
Removes and returns the last element returned by the [`next()`](#next) method from the underlying data structure.

**Returns** [`#!typescript E | undefined`] The last element returned by the [`next()`](#next) method.

```typescript
remove?(): E | undefined
```

---

### `#reset`

**Description** <br />
Resets this `IIterator` back to it's initial position, readying it to iterate over the underlying collection from the
'beginning' again.

Note that this does not/should not modify the underlying data structure, meaning that any modifications will not
be/should not be 'undone' by calling this method.

```typescript
reset?(): void
```

---

### `#[Symbol.iterator]`

**Description** <br />
Returns an instance of an `IterableIterator` that allows `#!typescript this` to be iterable using the baked-in
`for...of` syntax, rather than more verbose iteration (i.e. using a `#!typescript while` loop).

**Returns** [`#!typescript IterableIterator<E>`] An instance of an `IterableIterator`. <br />
**See** [Iterators and Generators on MDN][mdniterators]

[mdniterators]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators

```typescript
[Symbol.iterator](): IterableIterator<E>
```

---

### `#getIterableIterator`

**Description** <br />
This method is simply an ease-of-understanding alias method for the `[Symbol.iterator]` method.

**Returns** [`#!typescript IterableIterator<E>`] An instance of an `IterableIterator`. <br />
**See** [`#[Symbol.iterator]`](#symboliterator)

```typescript
getIterableIterator(): IterableIterator<E>
```
