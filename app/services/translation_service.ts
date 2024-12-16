import type { TranslationsRecord } from '#types/lang.js'
import type { I18n } from '@adonisjs/i18n'

export default class TranslationService {
  async fetchRelevantTranslations(i18n: I18n, pages: string[]): Promise<TranslationsRecord> {
    const relevantTranslations: TranslationsRecord = {} as TranslationsRecord

    for (const [key, fallbackValue] of Object.entries(i18n.fallbackTranslations)) {
      if (pages.includes(key.split('.')[0])) {
        relevantTranslations[key] = i18n.t(key) || fallbackValue
      }
    }

    return Promise.resolve(relevantTranslations)
  }
}
