import { CookieValue } from '~/types/cookies'
import type { TranslationsRecord } from '~/types/lang'
import { getCookie, setCookie } from '~/utils/cookies'
import { AVAILABLE_LOCALES, DEFAULT_CLIENT_LOCALE } from '~/utils/globals'

export const translate = (translationsRecord: TranslationsRecord, key: string): string => {
  return translationsRecord[key] || 'unfound translation'
}

export const getAvailableLocales = (): string[] => {
  return AVAILABLE_LOCALES
}

export const getClientLocale = async (): Promise<CookieValue> => {
  const clientLocale =
    (await getCookie('locale')) || (await updateClientLocale(DEFAULT_CLIENT_LOCALE))
  return clientLocale
}

export const updateClientLocale = async (locale: string): Promise<CookieValue> => {
  await setCookie('locale', locale)
  return locale
}
