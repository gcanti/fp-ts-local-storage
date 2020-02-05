---
title: index.ts
nav_order: 1
parent: Modules
---

# index overview

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
export const clear: IO<void> = ...
```

Added in v0.2.0

# getItem

**Signature**

```ts
export function getItem(key: string): IO<Option<string>> { ... }
```

Added in v0.2.0

# key

**Signature**

```ts
export function key(index: number): IO<Option<string>> { ... }
```

Added in v0.2.0

# length

**Signature**

```ts
export const length: IO<number> = ...
```

Added in v0.2.0

# removeItem

**Signature**

```ts
export function removeItem(key: string): IO<void> { ... }
```

Added in v0.2.0

# setItem

**Signature**

```ts
export function setItem(key: string, value: string): IO<void> { ... }
```

Added in v0.2.0
