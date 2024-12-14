import { Component, JSXElement } from 'solid-js'
import { Button } from '~/shadcn/ui/button'

interface AppLayoutProps {
  children: JSXElement
}

const AppLayout: Component<AppLayoutProps> = (props) => {
  return (
    <>
      <div class="w-full min-h-screen flex flex-col justify-start items-center">
        <div class="w-full text-center">app layout header</div>
        {props.children}
        <div class="w-full flex flex-col text-center">
          app layout footer{' '}
          <span>
            Made with 💜 by{' '}
            <Button variant={'outline'} class="hover:bg-purple-500 hover:text-white">
              <a href="https://ricane.art" target="_blank" class="w-full h-full">
                ricane.dev
              </a>
            </Button>
          </span>
        </div>
      </div>
    </>
  )
}

export default AppLayout
