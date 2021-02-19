export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '欧那教育',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,viewport-fit=cover' },
      // 当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari ios7.0版本以后，safari上已看不到效果
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // 将网站添加到主屏幕快速启动方式，仅针对ios的safari顶端状态条的样式 可选default、black、black-translucent
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      // 添加到IOS主屏后的标题
      { name: 'apple-mobile-web-app-title', content: '欧那官网' },
      {
        hid: 'indexDesc',
        name: 'description',
        content:
          '欧那德语为学员提供专业德语网络培训课程，采用小班式线上互动授课，涵盖德语入门、基础到精通多个阶段，满足学员留学、移民、德福考试等多项需求。欧那德语提供免费试听课服务The amazing Nuxt application that teaches me all the cool features of Nuxt'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: { allChunks: true }
  },
  render: {
    resourceHints: false, //取消首屏加载全部js
  },
  router: {
    prefetchLinks: false //取消预加载
  },
  
}
