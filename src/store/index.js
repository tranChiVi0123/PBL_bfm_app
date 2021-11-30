import Vue from "vue";
import Vuex from "vuex";
import { auth } from "./auth.module";
import { aggregation } from "./aggregation.module";
import { accounts } from "./accounts.module";
import { transactions } from "./transactions.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    aggregation,
    accounts,
    transactions
  },
});

export default store;
