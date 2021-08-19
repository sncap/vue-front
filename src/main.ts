import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import installI18n from './lang/index'
import i18n from './i18n'

const app = createApp(App).use(i18n)
installI18n(app)
app
  .use(vuetify)
  .mount('#app')
