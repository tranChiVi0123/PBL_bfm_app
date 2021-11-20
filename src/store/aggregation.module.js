import AccountsService from "../services/accounts";
import {AGGREGATE_SUCCESS, AGGREGATE_FAILURE} from "./type"

const initialState = { aggre_account_id: "" };

export const aggregation = {
  namespaced: true,
  state: initialState,
  getters: {
    aggre_account_id: (state) => state.aggre_account_id,
  },
  actions: {
    aggregate({ commit }, aggre_account_id) {
      return AccountsService.aggregating(aggre_account_id).then(
        (res) => {
          commit(AGGREGATE_SUCCESS, res);
          return Promise.resolve(res);
        },
        (error) => {
          commit(AGGREGATE_FAILURE);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    [AGGREGATE_SUCCESS](state, aggre_account_id) {
      state.aggre_account_id = aggre_account_id;
    },
    [AGGREGATE_FAILURE](state){
      state.aggre_account_id = null;
    }
  },
};
