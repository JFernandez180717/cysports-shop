// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import DayJsAdapter from '@date-io/dayjs'
import es from 'dayjs/locale/es'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    blueprint: md3,
    ssr: false,  
    date: {
      adapter: DayJsAdapter,
      locale: { es },
    },
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
  })
  app.vueApp.use(vuetify)
})
