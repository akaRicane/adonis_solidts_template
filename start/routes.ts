/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomePageController = () => import('#controllers/homepage_controller')
const TestPageController = () => import('#controllers/testpage_controller')

import router from '@adonisjs/core/services/router'

router.get('/', [HomePageController, 'index']).as('home')
router.get('/test', [TestPageController, 'index']).as('test')
