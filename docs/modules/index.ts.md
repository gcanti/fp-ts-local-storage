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

# length (constant)

**Signature**

```ts
export const length: IO<number> = ...
```

# getItem (function)

**Signature**

```ts
export const getItem = (key: string): IO<Option<string>> => ...
```

# key (function)

**Signature**

```ts
export const key = (index: number): IO<Option<string>> => ...
```

# removeItem (function)

**Signature**

```ts
export const removeItem = (key: string): IO<void> => ...
```

# setItem (function)

**Signature**

```ts
export const setItem = (key: string, value: string): IO<void> => ...
```
