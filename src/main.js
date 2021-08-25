import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui'; //引入elemnt-U
import 'element-ui/lib/theme-chalk/index.css';  //还要引入样式文件
import router from './router';
import MyHttpServer from './plugin/http.js';

Vue.config.productionTip = false;

//使用vue的Element插件 

Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(MyHttpServer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
