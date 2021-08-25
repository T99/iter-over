# Reference/Utility Classes/`ObjectIterator`

!!! help "How-To/Usage Guide"
    Find a how-to/usage guide for the `ObjectIterator` [here](/iter-over/basics/utility-classes/object-iterator/) class,
    or navigate to it via the ['The Basics'](/iter-over/basics/) tab.

An iterator that iterates over the keys of an object.

## Class Signature

**Description** <br />
An iterator that iterates over the keys of an object.

**Generic Arguments** <br />
- `T` [`#!typescript StringIndexedObject`] The type of the object that is being iterated over.

**Initial Version** `v0.1.0` <br />
**Latest Version** `v2.0.0`

```typescript
class ObjectIterator<T extends StringIndexedObject>
	extends AbstractIterator<KeyValuePair<keyof T, ValueOf<T>> | undefined>
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

    - _none_

    Indirect:

    - [`IIterator`](/iter-over/reference/core/i-iterator/): An interface representing the general form of an iterable
      class.

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

```typescript
public next(): KeyValuePair<keyof T, ValueOf<T>> | undefined
```

---

### `#remove`

```typescript
public remove(): KeyValuePair<keyof T, ValueOf<T>> | undefined
```

---

### `#reset`

```typescript
public reset(): void
```
