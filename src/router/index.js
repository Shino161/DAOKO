import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
// import iView from 'iview'
import { hasRight } from '@/libs/util'
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'hash'
})

const toPage = (to, from, next) => {
  if (!to.meta.access || hasRight(store.state.user.rights, to.meta.access[0])) {
    next()
  } else {
    next(new Error('您无权限进入此页面'))
  }
}

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

router.onError(err => {
  // iView.Message.error(err.message)
  // iView.LoadingBar.finish()
})
export default router
