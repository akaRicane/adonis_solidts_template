import CookiesService from '#services/cookies_service'
import type { TranslationsRecord } from '#types/lang.js'
import i18nManager from '@adonisjs/i18n/services/main'
import { Session } from '@adonisjs/session'

export default class TranslationService {
  async fetchRelevantTranslations(session: Session, pages: string[]): Promise<TranslationsRecord> {
    const relevantTranslations: TranslationsRecord = {} as TranslationsRecord
    const locale = await new CookiesService().getCookie(session, 'locale', 'fr')
    const lang = i18nManager.locale(locale as string)

    for (const [key, fallbackValue] of Object.entries(lang.fallbackTranslations)) {
      if (pages.includes(key.split('.')[0])) {
        relevantTranslations[key] = lang.localeTranslations[key] || fallbackValue
      }
    }
    return Promise.resolve(relevantTranslations)
  }
}
