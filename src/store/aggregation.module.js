import AccountsService from "../services/accounts";
import { AGGREGATE_SUCCESS, AGGREGATE_FAILURE } from "./type";

const initialState = { otp: "" };

export const aggregation = {
  // namespaced: true,
  state: initialState,
  getters: {
    otp: (state) => state.otp,
  },
  actions: {
    aggregate({ commit }, otp) {
       return AccountsService.aggregating(otp).then(
        (res) => {
          commit(AGGREGATE_SUCCESS, otp);
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
    [AGGREGATE_SUCCESS](state, otp) {
      state.otp = otp;
    },
    [AGGREGATE_FAILURE](state) {
      state.otp = null;
    },
  },
};
