import { Component } from 'solid-js'
import LinkNavigate from '~/components/links/link_navigate'

interface LinkAuthorProps {}

const LinkAuthor: Component<LinkAuthorProps> = () => {
  return (
    <span class="flex flex-row justify-center items-center space-x-2">
      Made with 💜 by{' '}
      <LinkNavigate
        href={'https://ricane.art'}
        text={'ricane.art'}
        target={'_blank'}
        variant="ghost"
        size="sm"
        class={'text-center items-center *:text-sm'}
      />
    </span>
  )
}

export default LinkAuthor
