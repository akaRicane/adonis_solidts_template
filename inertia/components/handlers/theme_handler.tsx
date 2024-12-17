import { BsMoonFill, BsSunFill } from 'solid-icons/bs'
import { Component, createSignal, onMount } from 'solid-js'
import { cn } from '~/shadcn/lib'
import { Button } from '~/shadcn/ui/button'
import { Theme } from '~/utils/enums'
import { DEFAULT_ICON_SIZE } from '~/utils/globals'

const getSystemTheme = (): string => {
  const preference = localStorage.getItem('theme')
  if (preference) {
    return preference
  }
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
  return darkThemeMq.matches ? Theme.Dark : Theme.Light
}

const saveThemePreference = (theme: string) => {
  localStorage.setItem('theme', theme)
}

interface ThemeHandlerProps {
  class?: string
  iconSize?: number
}

const ThemeHandler: Component<ThemeHandlerProps> = (props) => {
  const [theme, setTheme] = createSignal<string>(Theme.Light)

  onMount(() => {
    applyTheme(getSystemTheme())
  })

  const handleThemeSwitch = (): void => {
    applyTheme(theme() === Theme.Light ? Theme.Dark : Theme.Light)
    saveThemePreference(theme())
  }

  const applyTheme = (newTheme: string) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-kb-theme', theme())
  }

  return (
    <Button
      onClick={handleThemeSwitch}
      class={cn(
        'bg-background text-foreground h-full hover:bg-foreground hover:text-background',
        props.class
      )}
      size={'icon'}
    >
      {theme() === Theme.Light ? (
        <BsSunFill size={props.iconSize || DEFAULT_ICON_SIZE} />
      ) : (
        <BsMoonFill size={props.iconSize || DEFAULT_ICON_SIZE} />
      )}
    </Button>
  )
}

export default ThemeHandler
