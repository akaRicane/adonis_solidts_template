import { Component, createSignal, onMount } from 'solid-js'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/shadcn/ui/select'
import { DEFAULT_CLIENT_LOCALE } from '~/utils/globals'
import { getAvailableLocales, getClientLocale, updateClientLocale } from '~/utils/lang'

const LangHandler: Component<{}> = () => {
  const [clientLocale, setClientLocale] = createSignal<string>(DEFAULT_CLIENT_LOCALE)

  onMount(() => {
    getClientLocale().then(setClientLocale)
  })

  return (
    <>
      <Select
        options={getAvailableLocales()}
        defaultValue={clientLocale()}
        itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
        class=""
      >
        <SelectTrigger>
          <SelectValue<string>>
            {(state) => {
              updateClientLocale(state.selectedOption())
              return state.selectedOption()
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent />
      </Select>
    </>
  )
}

export default LangHandler
