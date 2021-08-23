# Reference/Utility Classes/`AbstractIterator`

A generic iterator very similar to the pattern used in Java.

## Class Signature

```typescript
abstract class AbstractIterator<E> implements IIterator<E>
```

## Abstract Instance Method Signatures

### `#hasNext`

```typescript
public abstract hasNext(): boolean
```

### `#next`

```typescript
public abstract next(): E | undefined
```

## Concrete Instance Method Signatures

### `#forEachRemaining`

```typescript
public forEachRemaining(callback: (element: E) => void): void
```

### `#remove`

```typescript
public remove(): E | undefined
```

### `#reset`

```typescript
public reset(): void
```

### `#[Symbol.iterator]`

```typescript
public [Symbol.iterator](): IterableIterator<E>
```

### `#getIterableIterator`

```typescript
public getIterableIterator(): IterableIterator<E>
```
