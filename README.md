# API

- `clear: IO<void>`
- `getItem: (key: string) => IO<Option<string>>`
- `key: (index: number) => IO<Option<string>>`
- `length: IO<number>`
- `removeItem: (key: string) => IO<void>`
- `setItem: (key: string, value: string) => IO<void>`

# Example

```ts
import { setItem, getItem } from 'fp-ts-local-storage'

const program = setItem('foo', JSON.stringify({ bar: 'baz' })).chain(() => getItem('foo'))

console.log(program.run()) // => some('{"bar":"baz"}')
```
