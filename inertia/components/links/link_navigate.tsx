import { Link } from 'inertia-adapter-solid'
import { Component } from 'solid-js'
import { cn } from '~/shadcn/lib'
import { Button } from '~/shadcn/ui/button'

interface LinkNavigateProps {
  href: string
  target?: string
  class?: string
  variant?:
    | 'default'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'destructive'
    | 'outline'
    | null
    | undefined
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  text: string
}

const LinkNavigate: Component<LinkNavigateProps> = (props) => {
  return (
    <Button
      variant={props.variant || 'ghost'}
      size={props.size}
      class="text-purple-500 hover:text-foreground hover:bg-purple-500"
    >
      {props.target === '_blank' ? (
        <a href={props.href} target={props.target} class={cn(props.class, 'font-bold border-none')}>
          {props.text}
        </a>
      ) : (
        <Link href={props.href} class={cn(props.class, '')}>
          {props.text}
        </Link>
      )}
    </Button>
  )
}

export default LinkNavigate
