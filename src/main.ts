import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './permission'//权限

import App from './App.vue'
import router from './router'
import jquery from 'jquery'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
