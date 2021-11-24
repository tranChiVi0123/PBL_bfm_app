import Toolbar from '../components/core/Toolbar.vue';
import Footer from '../components/core/Footer.vue';
import Breadcrumbs from '../components/core/Breadcrumbs'
import CardAccount from '../components/CardAccount.vue'

function setupComponents(Vue) {
  Vue.component('toolbar', Toolbar);
  Vue.component('Footer', Footer);
  Vue.component('breadcrumbs', Breadcrumbs);
  Vue.component('card-account', CardAccount);
}

export {
  setupComponents
}