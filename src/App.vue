<template>
  <div id="app">
    <notifications group="top-alert" />
    <div id="nav" v-if="!status.loggedIn">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <div id="nav" v-else>
      <v-btn v-on:click="logout">Logout</v-btn>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["status"]),
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
