import { Component } from 'solid-js'
import PageLayout from '~/app/page_layout'
import LinkNavigate from '~/components/links/link_navigate'
import type { PageProps } from '~/types/app'
import { translate } from '~/utils/lang'

interface TestProps {}

const Test: Component<PageProps & TestProps> = (props) => {
  return (
    <PageLayout
      metaTitle={translate(props.translations, 'test.meta_title')}
      translations={props.translations}
    >
      <div class="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <span>{translate(props.translations, 'test.hero_content')}</span>
        <LinkNavigate href="/" text={translate(props.translations, 'common.goto_home')} />
      </div>
    </PageLayout>
  )
}

export default Test
