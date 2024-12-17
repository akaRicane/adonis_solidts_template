/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from 'inertia-adapter-solid'
import { render } from 'solid-js/web'
import AppLayout from '~/app/app_layout'
import type { TranslationsRecord } from '~/types/lang'
import '../css/app.css'

createInertiaApp({
  progress: { color: '#5468FF' },

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    const translations: TranslationsRecord =
      (props.initialPage.props.translations as TranslationsRecord) || ({} as TranslationsRecord)
    render(
      () => (
        <AppLayout translations={translations}>
          <App {...props} />
        </AppLayout>
      ),
      el
    )
  },
})
