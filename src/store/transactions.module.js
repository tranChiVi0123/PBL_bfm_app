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
    formatTransactions: (state) => {
      var result = [];
      state.transactions.forEach((trans) => {
        result.push({
          id_hash: trans.transaction.id_hash,
          content: trans.transaction.content,
          is_transfer: trans.transaction.is_transfer.toString(),
          is_income: trans.transaction.is_income.toString(),
          amount: trans.transaction.amount,
          currency: trans.transaction.currency,
          is_target: trans.transaction.is_target.toString(),
          updated_at: trans.transaction.updated_at.toString(),
        });
      });
      return result;
    },
    seachTransactions: (state) => (keyword) => {
      return state.transactions.filter(
        (trans) =>
          trans.transaction.content.includes(keyword) ||
          trans.transaction.amount.includes(keyword)
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
