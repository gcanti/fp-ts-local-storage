/**
 * `fp-ts` bindings for `LocalStorage`
 *
 * **Example**
 *
 * ```ts
 * import * as assert from 'assert'
 * import { setItem, getItem } from 'fp-ts-local-storage'
 * import { some } from 'fp-ts/lib/Option'
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import { chain } from 'fp-ts/lib/IO'
 *
 * // const program: IO<Option<string>>
 * const program = pipe(
 *   setItem('foo', JSON.stringify({ bar: 'baz' })),
 *   chain(() => getItem('foo'))
 * )
 *
 * assert.deepStrictEqual(program(), some('{"bar":"baz"}'))
 * ```
 *
 * Note that `localStorage` may throw, for example if disabled by the user or with a `QuotaExceededError`, so you may want to wrap the API call with a `tryCatch`
 *
 * ```ts
 * import { setItem, getItem } from 'fp-ts-local-storage'
 * import { chain, tryCatch } from 'fp-ts/lib/IOEither'
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import { toError } from 'fp-ts/lib/Either'
 *
 * // const program: IOEither<Error, Option<string>>
 * const program = pipe(
 *   tryCatch(setItem('foo', JSON.stringify({ bar: 'baz' })), toError),
 *   chain(() => tryCatch(getItem('foo'), toError))
 * )
 * ```
 *
 * @since 0.2.0
 */
import { IO } from 'fp-ts/lib/IO'
import { fromNullable, Option } from 'fp-ts/lib/Option'

/**
 * @since 0.2.0
 */
export const clear: IO<void> = () => localStorage.clear()

/**
 * @since 0.2.0
 */
export function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key))
}

/**
 * @since 0.2.0
 */
export function key(index: number): IO<Option<string>> {
  return () => fromNullable(localStorage.key(index))
}

/**
 * @since 0.2.0
 */
export const length: IO<number> = () => localStorage.length

/**
 * @since 0.2.0
 */
export function removeItem(key: string): IO<void> {
  return () => localStorage.removeItem(key)
}

/**
 * @since 0.2.0
 */
export function setItem(key: string, value: string): IO<void> {
  return () => localStorage.setItem(key, value)
}
