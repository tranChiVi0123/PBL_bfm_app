import AuthService from "../services/auth";
import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE} from "./type"


const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    initialState: state => state.status
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (res) => {
          commit(LOGIN_SUCCESS, user);
          return Promise.resolve(res);
        },
        (error) => {
          commit(LOGIN_FAILURE);
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit(LOGOUT);
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (res) => {
          commit(REGISTER_SUCCESS, res);
          return Promise.resolve(res.data);
        },
        (error) => {
          commit(REGISTER_FAILURE);
          return Promise.reject(error);
        }
      );
    },
  },
  mutations:{
    [LOGIN_SUCCESS](state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    [LOGIN_FAILURE](state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    [LOGOUT](state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    [REGISTER_SUCCESS](state) {
      state.status.loggedIn = false;
    },
    [REGISTER_FAILURE](state) {
      state.status.loggedIn = false;
    }
  }
};
