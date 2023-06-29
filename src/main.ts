/*
 * @Author: Awei
 * @Date: 2023-06-28 21:27:16
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-29 21:26:52
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(vant)
app.use(store)
app.use(router)
app.mount('#app')
