import Toolbar from '../components/core/Toolbar.vue';
import Footer from '../components/core/Footer.vue';
import Breadcrumbs from '../components/core/Breadcrumbs'
import CardAccount from '../components/CardAccount.vue'
// import OtpInput from "@bachdgvn/vue-otp-input";


function setupComponents(Vue) {
  Vue.component('toolbar', Toolbar);
  Vue.component('Footer', Footer);
  Vue.component('breadcrumbs', Breadcrumbs);
  Vue.component('card-account', CardAccount);
  // Vue.component('v-otp-input', OtpInput);
}

export {
  setupComponents
}