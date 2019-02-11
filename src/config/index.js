export default {
  /**
   * @description iconfont中的图标数量
   */
  iconFontLibSize: 47,
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 0.2,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: '/proxy',
    pro: ''
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  },

}
