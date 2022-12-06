import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'Element-plus'
import 'element-plus/theme-chalk/index.css'

import { createPinia } from "pinia"

//icon
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus)
    .use(createPinia())
    .mount('#app')
