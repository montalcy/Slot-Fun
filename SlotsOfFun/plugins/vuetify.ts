// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light', 
      themes: {
        light: {
          colors: {
            primary: '##a6a6a6',
            secondary: '##ff4747',
            background: '##dbcaca',
          },
        },
        dark: {
          colors: {
            primary: '#121212',
            secondary: '#bd0000',
            background: '#4d4d4d',
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
