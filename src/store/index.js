import Vue from "vue";
import Vuex from "vuex";
import {auth} from "./auth.module";
import {aggregation} from "./aggregation.module";


Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    auth,
    aggregation
  }
});

export default store;

