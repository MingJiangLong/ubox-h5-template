import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import Vconsole from 'vconsole'
import { isLocalEnv } from './utils'
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia();
if (isLocalEnv) {
  app.use(() => new Vconsole())
}
app.use(pinia)
app.use(router).mount('#app')
