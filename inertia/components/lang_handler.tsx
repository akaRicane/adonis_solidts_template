import { Component, createSignal, onMount } from 'solid-js'
import { DEFAULT_CLIENT_LOCALE } from '~/utils/globals'
import { getAvailableLocales, getClientLocale, updateClientLocale } from '~/utils/lang'

const LangHandler: Component<{}> = () => {
  const [clientLocale, setClientLocale] = createSignal<string>(DEFAULT_CLIENT_LOCALE)

  onMount(() => {
    getClientLocale().then(setClientLocale)
  })

  const handleLocaleChange = async (selectedLanguage: string): Promise<void> => {
    setClientLocale(selectedLanguage)
    await updateClientLocale(selectedLanguage)
    return window.location.reload()
  }

  return (
    <select value={clientLocale()} onChange={(e) => handleLocaleChange(e.currentTarget.value)}>
      {getAvailableLocales().map((locale) => (
        <option value={locale}>{locale}</option>
      ))}
    </select>
  )
}

export default LangHandler
