import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';
import config from '@/config'
import filters from '@/libs/filter'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * @description 全局加载过滤器
 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
    el:"#app",
    router,
    store,
    render:h=>h(App)
})