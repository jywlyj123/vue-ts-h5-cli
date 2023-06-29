/*
 * @Author: Awei
 * @Date: 2023-06-28 21:27:16
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-29 10:14:48
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
