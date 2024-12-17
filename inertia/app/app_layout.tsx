import { Component, JSXElement } from 'solid-js'
import LinkAuthor from '~/components/links/link_author'
import type { TranslationsRecord } from '~/types/lang'
import { translate } from '~/utils/lang'

interface AppLayoutProps {
  children: JSXElement
  translations: TranslationsRecord
}

const AppLayout: Component<AppLayoutProps> = (props) => {
  return (
    <>
      <div class="w-full min-h-screen flex flex-col justify-start items-center">
        <div class="w-full flex flex-row justify-center items-center text-center">
          <span class="text-sm">{translate(props.translations, 'common.app_layout_header')}</span>
        </div>
        {props.children}
        <div class="w-full flex flex-col items-center justify-center text-sm *:text-sm text-center">
          {translate(props.translations, 'common.app_layout_footer')} <LinkAuthor />
        </div>
      </div>
    </>
  )
}

export default AppLayout
