import type { CookieValue } from '~/types/cookies'

export const getCookie = async (name: string): Promise<CookieValue | null> => {
  const match = document.cookie.match(new RegExp(`${name}=([^;]*)`))
  const value = match?.at(1) as CookieValue
  return Promise.resolve(value)
}

export const setCookie = async (name: string, value: CookieValue): Promise<CookieValue> => {
  document.cookie = `${name}=${encodeURIComponent(value)};`
  return Promise.resolve(value)
}
