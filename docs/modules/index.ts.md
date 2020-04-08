---
title: index.ts
nav_order: 1
parent: Modules
---

# index overview

`fp-ts` bindings for `LocalStorage`

**Example**

```ts
import * as assert from 'assert'
import { setItem, getItem } from 'fp-ts-local-storage'
import { some } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { chain } from 'fp-ts/lib/IO'

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
import { chain, tryCatch } from 'fp-ts/lib/IOEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { toError } from 'fp-ts/lib/Either'

// const program: IOEither<Error, Option<string>>
const program = pipe(
  tryCatch(setItem('foo', JSON.stringify({ bar: 'baz' })), toError),
  chain(() => tryCatch(getItem('foo'), toError))
)
```

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [clear](#clear)
- [getItem](#getitem)
- [key](#key)
- [length](#length)
- [removeItem](#removeitem)
- [setItem](#setitem)

---

# clear

**Signature**

```ts
export declare const clear: IO<void>
```

Added in v0.2.0

# getItem

**Signature**

```ts
export declare function getItem(key: string): IO<Option<string>>
```

Added in v0.2.0

# key

**Signature**

```ts
export declare function key(index: number): IO<Option<string>>
```

Added in v0.2.0

# length

**Signature**

```ts
export declare const length: IO<number>
```

Added in v0.2.0

# removeItem

**Signature**

```ts
export declare function removeItem(key: string): IO<void>
```

Added in v0.2.0

# setItem

**Signature**

```ts
export declare function setItem(key: string, value: string): IO<void>
```

Added in v0.2.0
