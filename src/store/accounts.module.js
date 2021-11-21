import AccountsService from "../services/accounts";
import { FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_FAILURE } from "./type";

export const accounts = {
  namespaced: true,
  state: { aggre_accounts: [] },
  getters: {
    otp: (state) => state.otp,
  },
  actions: {
    fetch_accounts({ commit }) {
      return AccountsService.fetch_accounts().then(
        (res) => {
          commit(FETCH_ACCOUNTS_SUCCESS, res);
          return Promise.resolve(res);
        },
        (error) => {
          commit(FETCH_ACCOUNTS_FAILURE);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    [FETCH_ACCOUNTS_SUCCESS](state, otp) {
      state.otp = otp;
    },
    [FETCH_ACCOUNTS_FAILURE](state) {
      state.otp = null;
    },
  },
};
