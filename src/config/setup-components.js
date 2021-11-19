import Toolbar from '../components/core/Toolbar.vue';
import Footer from '../components/core/Footer.vue';

function setupComponents(Vue) {
  Vue.component('toolbar', Toolbar);
  Vue.component('Footer', Footer);
}

export {
  setupComponents
}