import { Link } from 'inertia-adapter-solid'
import { Component } from 'solid-js'
import { cn } from '~/shadcn/lib'
import { Button } from '~/shadcn/ui/button'

interface LinkNavigateProps {
  href: string
  target?: string
  class?: string
  text: string
}

const LinkNavigate: Component<LinkNavigateProps> = (props) => {
  return (
    <Button variant={'outline'} class="hover:text-foreground hover:bg-purple-500">
      <Link href={props.href} target={props.target || ''} class={cn(props.class, '')}>
        {props.text}
      </Link>
    </Button>
  )
}

export default LinkNavigate
