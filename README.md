# Installation

- clone repository: `git clone https://github.com/akaRicane/adonis_solidts_template.git`
- install dependencies: `pnpm install`
- rename the `.env.local` in `.env`
  - TIP: you also can duplicate and rename `.env.local`
- generate APP KEY: `node ace generate:key`
- edit some informations in the cloned repository:
  - package.json - `name`
  - .env & .env.local - `VITE_APP_NAME`

<br/>
<br/>

# Using Adonis framework

Visit official documentation [docs.adonis](https://docs.adonisjs.com/guides/preface/introduction)

## Controllers

Controllers are used to answer routing queries relative, thus cleaning the `routes.ts` file.

`node ace make:controller <controller_name>`

Controllers should be lazy loaded in `routes.ts`.

`const HomePageController = () => import('#controllers/homepage_controller')`

## Middlewares

Middlewares are code function that are executed just before an HTTP query reaching routes.ts. They are very useful for specific actions like i18n and authorizations.

## Services

Services act like singletons and are designed to be used in the server back-end codebase as utilities.

`node ace make:service <service_name>`

Most of the time, services must be used with a new instance.

`const translations: TranslationsRecord = await new TranslationService().fetchRelevantTranslations(i18n, ['home', 'common'])`

<br/>
<br/>

# Deployment using Docker

Before pushing your app in hub.docker or any production mode, you can test (and catch bugs) with the "local" production mode, by using `sh local_build.sh`.

Once it works fine:
- edit the values of DOCKER_IMAGE_NAME and DOCKER_PLATFORM_TARGET in .env file
- make sure Docker is running on your machine
- run: `sh deploy.sh`
