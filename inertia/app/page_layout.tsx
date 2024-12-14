import { Component, JSXElement } from 'solid-js'
import { Meta } from '~/app/meta'

interface PageLayoutProps {
  children: JSXElement
  metaTitle?: string
}

const PageLayout: Component<PageLayoutProps> = (props) => {
  return (
    <>
      <Meta title={props.metaTitle} />

      <div class="w-full min-h-screen flex flex-col justify-start items-center">
        <div class="w-full text-center bg-pink-300">page layout header</div>
        <div class="w-full min-h-screen">{props.children}</div>
        <div class="w-full text-center bg-pink-300">page layout footer</div>
      </div>
    </>
  )
}

export default PageLayout
