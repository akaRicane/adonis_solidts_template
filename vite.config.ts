import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import adonisjs from '@adonisjs/vite/client'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    solid(),
    adonisjs({ entrypoints: ['inertia/app/app.tsx'], reload: ['resources/views/**/*.edge'] }),
  ],

  resolve: {
    alias: {
      '~/shadcn/': `${getDirname(import.meta.url)}/inertia/shadcn/`,
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
  assetsInclude: ['**/*.html'],
})
