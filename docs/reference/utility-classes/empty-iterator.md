# Reference/Utility Classes/`EmptyIterator`

An empty iterator.

!!! help "How-To/Usage Guide"
    Find a how-to/usage guide for the `EmptyIterator` [here](/iter-over/basics/utility-classes/empty-iterator/) class,
    or navigate to it via the ['The Basics'](/iter-over/basics/) tab.

---

## Class Signature

**Description:** <br />
An empty iterator.

**Initial Version:** `v0.1.0` <br />
**Latest Version:** `v2.0.0`

```typescript
class EmptyIterator extends AbstractIterator<undefined>
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

**Implements** [`AbstractIterator#hasNext`](/iter-over/reference/core/abstract-iterator/#hasnext)

```typescript
public hasNext(): false
```

---

### `#next`

**Implements** [`AbstractIterator#next`](/iter-over/reference/core/abstract-iterator/#next)

```typescript
public next(): undefined
```

---

### `#remove`

**Overrides** [`AbstractIterator#remove`](/iter-over/reference/core/abstract-iterator/#remove)

```typescript
public remove(): undefined
```

---

### `#reset`

**Overrides** [`AbstractIterator#reset`](/iter-over/reference/core/abstract-iterator/#reset)
	
```typescript
public reset(): void
```
