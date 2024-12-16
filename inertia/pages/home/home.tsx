import { Link } from 'inertia-adapter-solid'
import { Component } from 'solid-js'
import PageLayout from '~/app/page_layout'
import { Button } from '~/shadcn/ui/button'
import type { TranslationsRecord } from '~/types/lang'
import { translate } from '~/utils/lang'

interface HomeProps {
  translations: TranslationsRecord
}

const Home: Component<HomeProps> = (props) => {
  return (
    <PageLayout metaTitle={translate(props.translations, 'home.meta_title')}>
      <div class="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <span>{translate(props.translations, 'home.hero_content')}</span>

        <Button variant={'outline'} class="hover:text-white hover:bg-purple-500">
          <Link href="/test" class="w-full h-full">
            go to test page
          </Link>
        </Button>
      </div>
    </PageLayout>
  )
}

export default Home
