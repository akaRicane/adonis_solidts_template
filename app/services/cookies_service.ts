import type { CookieValue } from '#types/cookies.js'
import { Session } from '@adonisjs/session'

export default class CookiesService {
  async getCookie(session: Session, name: string, defaultValue: CookieValue): Promise<CookieValue> {
    return Promise.resolve(session.get(name)) || (await this.setCookie(session, name, defaultValue))
  }

  async setCookie(session: Session, name: string, value: CookieValue): Promise<CookieValue> {
    session.put(name, value)
    await session.commit()
    return Promise.resolve(value)
  }
}
