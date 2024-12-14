/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from 'inertia-adapter-solid'
import { render } from 'solid-js/web'
import AppLayout from '~/app/app_layout'
import '../css/app.css'

createInertiaApp({
  progress: { color: '#5468FF' },

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    render(
      () => (
        <AppLayout>
          <App {...props} />
        </AppLayout>
      ),
      el
    )
  },
})
