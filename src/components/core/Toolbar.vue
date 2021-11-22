<template>
  <nav>
    <v-toolbar>
      <!--      <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">Money</span>
        <span>Forward</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <!-- <v-btn text slot="activator"> -->
          <v-btn text v-on="on">
            <v-icon middle>mdi-bell-badge-outline</v-icon>
          </v-btn>
        </template>
        <v-list>
          <!-- v-list-tile is changed to v-list-item -->
          <!-- <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item> -->
          Notifications
        </v-list>
      </v-menu>

      <v-btn text v-on:click="logout">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <!-- v-list-tile is changed to v-list-item -->
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "home", text: "Home", route: "/" },
      { icon: "add_link", text: "Aggregation", route: "/aggregation" },
      { icon: "account_balance", text: "Transactions", route: "/transactions" },
      { icon: "contacts", text: "About", route: "/about" },
    ],
  }),
  methods: {
    ...mapActions('auth', ["logout"]),
  }
};
</script>