import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import {setupComponents} from "./config/setup-components"


Vue.config.productionTip = false
Vue.use(Notifications);

setupComponents(Vue)

new Vue({
  router: router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
