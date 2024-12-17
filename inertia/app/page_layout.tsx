import { Component, JSXElement } from 'solid-js'
import { Meta } from '~/app/meta'
import LangHandler from '~/components/handlers/lang_handler'
import ThemeHandler from '~/components/handlers/theme_handler'
import type { TranslationsRecord } from '~/types/lang'
import { translate } from '~/utils/lang'

interface PageLayoutProps {
  children: JSXElement
  metaTitle?: string
  translations: TranslationsRecord
}

const PageLayout: Component<PageLayoutProps> = (props) => {
  return (
    <>
      <Meta title={props.metaTitle} />

      <div class="w-full min-h-screen flex flex-col justify-start items-center">
        <div class="w-full text-center bg-pink-300">
          {translate(props.translations, 'common.page_layout_header')}
          <ThemeHandler />
          <LangHandler />
        </div>
        <div class="w-full">{props.children}</div>
        <div class="w-full text-center bg-pink-300">
          {translate(props.translations, 'common.page_layout_footer')}
        </div>
      </div>
    </>
  )
}

export default PageLayout
