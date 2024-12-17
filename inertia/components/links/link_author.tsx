import { Component } from 'solid-js'
import { Button } from '~/shadcn/ui/button'

interface LinkAuthorProps {}

const LinkAuthor: Component<LinkAuthorProps> = () => {
  return (
    <span class="flex flex-row justify-center items-center space-x-2">
      Made with 💜 by{' '}
      <Button
        variant={'ghost'}
        size={'sm'}
        class="text-sm *:text-smhover:text-white hover:bg-purple-500"
      >
        <a href="https://ricane.art" target="_blank" class="text-center items-center *:text-sm">
          ricane.dev
        </a>
      </Button>
    </span>
  )
}

export default LinkAuthor
