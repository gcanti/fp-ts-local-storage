---
title: index.ts
nav_order: 1
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [clear (constant)](#clear-constant)
- [length (constant)](#length-constant)
- [getItem (function)](#getitem-function)
- [key (function)](#key-function)
- [removeItem (function)](#removeitem-function)
- [setItem (function)](#setitem-function)

---

# clear (constant)

**Signature**

```ts
export const clear: IO<void> = ...
```

Added in v0.2.0

# length (constant)

**Signature**

```ts
export const length: IO<number> = ...
```

Added in v0.2.0

# getItem (function)

**Signature**

```ts
export function getItem(key: string): IO<Option<string>> { ... }
```

Added in v0.2.0

# key (function)

**Signature**

```ts
export function key(index: number): IO<Option<string>> { ... }
```

Added in v0.2.0

# removeItem (function)

**Signature**

```ts
export function removeItem(key: string): IO<void> { ... }
```

Added in v0.2.0

# setItem (function)

**Signature**

```ts
export function setItem(key: string, value: string): IO<void> { ... }
```

Added in v0.2.0
