import type { CookieValue } from '~/types/cookies'

export const getCookie = async (name: string): Promise<CookieValue | null> => {
  try {
    const response = await fetch('/cookies/get/locale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token':
          document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
      },
      body: JSON.stringify({ name }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data: CookieValue = await response.json()
    console.log('Cookie retrieved:', data)
    return data
  } catch (error) {
    console.error('Failed to get cookie:', error)
    return null
  }
}

export const setCookie = async (name: string, value: CookieValue): Promise<void> => {
  try {
    const response = await fetch('/cookies/set/locale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CSRF-Token':
          document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
      },
      body: JSON.stringify({ name, value }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    console.log('Cookie set:', data)
  } catch (error) {
    console.error('Failed to set cookie:', error)
  }
}
