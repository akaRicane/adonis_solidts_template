import { Link } from 'inertia-adapter-solid'
import { Component } from 'solid-js'
import PageLayout from '~/app/page_layout'
import { Button } from '~/shadcn/ui/button'

const Home: Component = () => {
  return (
    <PageLayout metaTitle="Home">
      <div class="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <span>Welcome to your Adonis x Solid.ts template</span>

        <Button variant={'outline'} class="hover:bg-purple-500 hover:text-white">
          <Link href="/test" class="w-full h-full">
            go to test page
          </Link>
        </Button>
      </div>
    </PageLayout>
  )
}

export default Home
