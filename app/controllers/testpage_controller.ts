import TranslationService from '#services/translation_service'
import type { TranslationsRecord } from '#types/lang.js'
import type { HttpContext } from '@adonisjs/core/http'
import type { PageObject } from '@adonisjs/inertia/types'

export default class TestPageController {
  async index({ inertia, i18n }: HttpContext): Promise<string | PageObject<{}>> {
    const translations: TranslationsRecord =
      await new TranslationService().fetchRelevantTranslations(i18n, ['test', 'common'])
    return inertia.render('test/test', { translations })
  }
}
