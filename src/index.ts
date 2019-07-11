import { IO } from 'fp-ts/lib/IO'
import { fromNullable, Option } from 'fp-ts/lib/Option'

const _clear = () => localStorage.clear()

/**
 * @since 0.2.0
 */
export const clear: IO<void> = _clear

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

const _length = () => localStorage.length

/**
 * @since 0.2.0
 */
export const length: IO<number> = _length

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
