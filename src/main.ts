import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Vconsole from 'vconsole'
import { isLocalEnv } from './utils'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
if (isLocalEnv) {
  app.use(() => new Vconsole())
}
app.use(pinia)
app.use(router).mount('#app')
