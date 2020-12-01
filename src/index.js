import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from './router';
import store from './store';
import config from '@/config'
import filters from '@/libs/filter'


Vue.use(ElementUI)
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