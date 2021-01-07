/*
 * @Author: 五道杠
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue', // app name registered
    entry: '//127.0.0.1:10000',
    container: '#vue',
    activeRule: '/vue',
    props: {
      initState: store.state
    }
  },
  {
    name: 'vue-create', // app name registered
    entry: '//127.0.0.1:10001',
    container: '#vue',
    activeRule: '/vue-create',
    props: {
      initState: store.state
    }
  },
]);
start();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
