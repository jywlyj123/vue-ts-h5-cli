/*
 * @Author: Awei
 * @Date: 2023-06-29 08:48:22
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-29 09:55:34
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')
  // },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/login.vue')
  }
]

export default routes
