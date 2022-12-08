import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import { createPinia } from "pinia"

//icon
import 'virtual:svg-icons-register'
//router
import router  from '@/router'
import i18n from "@/lang/index";

const app = createApp(App)

app.use(ElementPlus)
    .use(createPinia())
    .use(i18n)
    .use(router)
    .mount('#app')
