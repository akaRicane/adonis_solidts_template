import { MetaProvider, Title } from '@solidjs/meta'
import { JSXElement } from 'solid-js'

// You can extract the Meta component to a separate file
export function Meta(props: { title?: string; children?: JSXElement }) {
  const title = props.title
    ? import.meta.env.VITE_APP_NAME + ' ' + props.title
    : import.meta.env.VITE_APP_NAME

  return (
    <MetaProvider>
      <Title>{title}</Title>
      {props.children}
    </MetaProvider>
  )
}
