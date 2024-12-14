import { Link } from 'inertia-adapter-solid'
import { Component } from 'solid-js'
import PageLayout from '~/app/page_layout'

const Test: Component<{}> = () => {
  return (
    <PageLayout>
      <div class="w-full h-screen flex flex-col justify-center items-center space-y-4">
        this is a test page <Link href="/">go to home</Link>
      </div>
    </PageLayout>
  )
}

export default Test
