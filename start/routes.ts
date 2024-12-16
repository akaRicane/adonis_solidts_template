/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')

import CookiesService from '#services/cookies_service'
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index']).as('home')

router.post('/cookies/set/locale', async ({ request, session }) => {
  const cookiesService = new CookiesService()
  await cookiesService.setCookie(session, 'locale', request.input('value'))
  const value = await cookiesService.getCookie(session, 'locale', 'fr')
  console.log('Cookie updated:', value)

  return JSON.stringify(value)
})

router.post('/cookies/get/locale', async ({ session }) => {
  const cookiesService = new CookiesService()
  const value = await cookiesService.getCookie(session, 'locale', 'fr')
  console.log('Cookie read:', value)

  return JSON.stringify(value)
})

router.on('/test').renderInertia('test/test')
