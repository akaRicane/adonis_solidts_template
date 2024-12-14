import { BsMoonFill, BsSunFill } from 'solid-icons/bs'
import { Component, createSignal, onMount } from 'solid-js'
import { Theme } from '~/app/enums'
import { DEFAULT_ICON_SIZE } from '~/app/globals'
import { Button } from '~/shadcn/ui/button'

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
  style?: string
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
    <Button onClick={handleThemeSwitch} class={props.style || ''}>
      {theme() === Theme.Light ? (
        <BsSunFill size={props.iconSize || DEFAULT_ICON_SIZE} />
      ) : (
        <BsMoonFill size={props.iconSize || DEFAULT_ICON_SIZE} />
      )}
    </Button>
  )
}

export default ThemeHandler
