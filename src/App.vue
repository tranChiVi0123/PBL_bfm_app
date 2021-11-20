<template>
  <v-app>
    <template v-if="!$router.currentRoute.meta.allowAnonymous">
      <notifications group="top-alert" />
      <toolbar />
      <v-main>
        <breadcrumbs/>
        <router-view></router-view>
      </v-main>
      <Footer />
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <div id="nav">
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link>
            <router-view />
          </div>
        </keep-alive>
      </transition>
    </template>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
