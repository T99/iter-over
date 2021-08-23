# Reference/Utility Classes/`ObjectIterator`

An iterator that iterates over the keys of an object.

## Class Signature

```typescript
class ObjectIterator<T extends StringIndexedObject>
	extends AbstractIterator<KeyValuePair<keyof T, ValueOf<T>>>
```

## Instance Method Signatures

### `#hasNext`

```typescript
public hasNext(): boolean
```

### `#next`

```typescript
public next(): KeyValuePair<keyof T, ValueOf<T>>
```

### `#remove`

```typescript
public remove(): KeyValuePair<keyof T, ValueOf<T>> | undefined
```

### `#reset`

```typescript
public reset(): void
```
