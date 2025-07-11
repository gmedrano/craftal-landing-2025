import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles.css'
import './styles/main.css'
import App from './App.vue'
import router from './router'

// Vuetify setup
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#FFFFFF',
          surface: '#f8f9fa',
          'on-surface': '#424242',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#9538D7',
          secondary: '#d8c8ea',
          accent: '#FFF500',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#1a0c29',
          surface: '#2a1442',
          'on-surface': '#d8c8ea',
        },
      },
    },
  },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
