// /*
//  * @Author: Awei
//  * @Date: 2023-06-29 21:22:36
//  * @Last Modified by: Awei
//  * @Last Modified time: 2023-06-29 21:49:31
//  */
// import { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
// import { showToast } from 'vant'

// const request: AxiosInstance = axios.create({
//   timeout: 30000
// })

// // 请求拦截
// request.interceptors.request.use(
//   (config: any) => {
//     config.headers['Content-Type'] = 'application/json'
//     if (localStorage.getItem('TOKEN')) {
//       const Authorization = localStorage.getItem('TOKEN')
//       config.headers['Authorization'] = `${Authorization}`
//     }
//     return config
//   },
//   (error: AxiosError) => {
//     Promise.reject(error)
//   }
// )

// // 响应拦截
// request.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return Promise.resolve(response)
//   },
//   (error: AxiosError) => {
//     const status = error.response?.status
//     switch (status) {
//       case 401:
//         showToast({
//           type: 'fail',
//           message: error.response?.data.msg || '暂无数据！',
//           onClose() {
//             const pathUrl = location.href.split('/')
//             window.location.href = `/user/login?redirect=${encodeURIComponent('/' + pathUrl[3])}`
//           }
//         })
//         break
//       case 406:
//         Toast.fail(error.response?.data.msg || '暂无数据！', 1)
//         showToast({
//           type: 'fail',
//           message: error.response?.data.msg || '暂无数据！'
//         })
//         break
//       case 500:
//         showToast({
//           type: 'fail',
//           message: error.response?.data.msg || '服务端报错,请重启再试！'
//         })
//         break
//       default:
//         showToast({
//           type: 'fail',
//           message: '未知错误，请刷新页面'
//         })
//         break
//     }
//     return Promise.reject(error)
//   }
// )
