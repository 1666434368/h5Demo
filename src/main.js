// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '@/styles/index.scss' // global css
import '@/assets/iconfont/iconfont.css' // iconfont css

import 'lib-flexible'
import '@/utils/rem'
Vue.use(Mint)
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
