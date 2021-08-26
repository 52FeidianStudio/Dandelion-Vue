const MyHttpServer = {}

import axios from 'axios'

MyHttpServer.install = (Vue) => {
    axios.defaults.baseURL='http://localhost:8000/',
    // 4. 添加实例方法 prototype 原型属性增加成员
    // 192.168.3.87
    Vue.prototype.$http = axios
}
// 像插件一样使用axios
export default MyHttpServer
