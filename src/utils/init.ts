/*
 * @Author: Awei
 * @Date: 2023-06-30 19:23:29
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-30 19:26:08
 */
import { Form, Field, CellGroup } from 'vant'
import 'vant/lib/index.css'

export const initVant = function (app: any) {
  app.use(Form)
  app.use(Field)
  app.use(CellGroup)
}
