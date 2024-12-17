import { Component } from 'solid-js'
import PageLayout from '~/app/page_layout'
import LinkNavigate from '~/components/links/link_navigate'
import type { PageProps } from '~/types/app'
import { translate } from '~/utils/lang'

interface HomeProps {}

const Home: Component<PageProps & HomeProps> = (props) => {
  return (
    <PageLayout
      metaTitle={translate(props.translations, 'home.meta_title')}
      translations={props.translations}
    >
      <div class="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <span>{translate(props.translations, 'home.hero_content')}</span>
        <LinkNavigate href="/test" text={translate(props.translations, 'common.goto_testpage')} />
      </div>
    </PageLayout>
  )
}

export default Home
