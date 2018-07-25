import { IO } from 'fp-ts/lib/IO'
import { fromNullable, Option } from 'fp-ts/lib/Option'

export const clear: IO<void> = new IO(() => localStorage.clear())

export const getItem = (key: string): IO<Option<string>> => {
  return new IO(() => fromNullable(localStorage.getItem(key)))
}

export const key = (index: number): IO<Option<string>> => {
  return new IO(() => fromNullable(localStorage.key(index)))
}

export const length: IO<number> = new IO(() => localStorage.length)

export const removeItem = (key: string): IO<void> => {
  return new IO(() => localStorage.removeItem(key))
}

export const setItem = (key: string, value: string): IO<void> => {
  return new IO(() => localStorage.setItem(key, value))
}
