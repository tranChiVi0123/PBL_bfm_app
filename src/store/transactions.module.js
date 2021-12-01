import TransactionsService from "../services/transactions";
import { FETCH_TRANSACTIONS_SUCCESS, FETCH_TRANSACTIONS_FAILURE } from "./type";

export const transactions = {
  namespaced: true,
  state: { transactions: [] },
  getters: {
    getTransactionsBySubAccountId: (state) => (sub_account_id) => {
      return state.transactions.filter(
        (trans) => trans.transaction.hashed_sub_account_id === sub_account_id
      );
    },
    seachTransaction: (state) => (keyword) => {
      return state.transactions.filter(
        (trans) => trans.transaction === keyword
      );
    },
  },
  actions: {
    fetch_transactions({ commit }) {
      return TransactionsService.fetch_transactions().then(
        (res) => {
          commit(FETCH_TRANSACTIONS_SUCCESS, res.data);
          return Promise.resolve(res);
        },
        (error) => {
          commit(FETCH_TRANSACTIONS_FAILURE);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    [FETCH_TRANSACTIONS_SUCCESS](state, trans) {
      state.transactions = trans;
    },
    [FETCH_TRANSACTIONS_FAILURE](state) {
      state.transactions = null;
    },
  },
};
