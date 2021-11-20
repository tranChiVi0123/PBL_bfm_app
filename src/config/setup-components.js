import Toolbar from '../components/core/Toolbar.vue';
import Footer from '../components/core/Footer.vue';
import Breadcrumbs from '../components/core/Breadcrumbs'

function setupComponents(Vue) {
  Vue.component('toolbar', Toolbar);
  Vue.component('Footer', Footer);
  Vue.component('breadcrumbs', Breadcrumbs);
}

export {
  setupComponents
}