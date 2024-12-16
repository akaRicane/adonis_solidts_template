import TranslationService from '#services/translation_service'
import type { TranslationsRecord } from '#types/lang.js'
import type { HttpContext } from '@adonisjs/core/http'
import { PageObject } from '@adonisjs/inertia/types'

export default class HomeController {
  async index({ inertia, session }: HttpContext): Promise<string | PageObject<{}>> {
    const translations: TranslationsRecord =
      await new TranslationService().fetchRelevantTranslations(session, ['home', 'common'])
    return inertia.render('home/home', { translations })
  }
}
