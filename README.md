[fp-ts](https://github.com/gcanti/fp-ts) bindings for LocalStorage

# Documentation

- [API Reference](https://gcanti.github.io/fp-ts-local-storage)

**Example**

```ts
import * as assert from 'assert'
import { setItem, getItem } from 'fp-ts-local-storage'
import { some } from 'fp-ts/Option'
import { pipe } from 'fp-ts/pipeable'
import { chain } from 'fp-ts/IO'

// const program: IO<Option<string>>
const program = pipe(
  setItem('foo', JSON.stringify({ bar: 'baz' })),
  chain(() => getItem('foo'))
)

assert.deepStrictEqual(program(), some('{"bar":"baz"}'))
```

Note that `localStorage` may throw, for example if disabled by the user or with a `QuotaExceededError`, so you may want to wrap the API call with a `tryCatch`

```ts
import { setItem, getItem } from 'fp-ts-local-storage'
import { chain, tryCatch } from 'fp-ts/IOEither'
import { pipe } from 'fp-ts/pipeable'
import { toError } from 'fp-ts/Either'

// const program: IOEither<Error, Option<string>>
const program = pipe(
  tryCatch(setItem('foo', JSON.stringify({ bar: 'baz' })), toError),
  chain(() => tryCatch(getItem('foo'), toError))
)
```
