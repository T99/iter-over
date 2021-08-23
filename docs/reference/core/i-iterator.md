# Reference/Utility Classes/`IIterator`

An interface representing the general form of an iterable class.

## Interface Signature

```typescript
interface IIterator<E>
```

## Interface Method Signatures

### `#hasNext`

```typescript
hasNext(): boolean
```

### `#next`

```typescript
next(): E | undefined
```

### `#forEachRemaining`

```typescript
forEachRemaining(callback: (element: E) => void): void
```

### `#remove`

```typescript
remove?(): E | undefined
```

### `#reset`

```typescript
reset?(): void
```

### `#[Symbol.iterator]`

```typescript
[Symbol.iterator](): IterableIterator<E>
```

### `#getIterableIterator`

```typescript
getIterableIterator(): IterableIterator<E>
```
