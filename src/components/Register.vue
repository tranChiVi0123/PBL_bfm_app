<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    v-model="user.email"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    v-model="user.password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    id="password-confirmation"
                    v-model="user.password_confirmation"
                    prepend-icon="mdi-lock"
                    name="password-confirmation"
                    label="Password confirmation"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  v-on:click="handleSubmit"
                  :disabled="loading"
                >
                  <beat-loader
                    :loading="loading"
                    color="gray"
                    size="15px"
                  ></beat-loader>
                  <span v-show="!loading">Submit</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
export default {
  name: "Register",
  components: {
    BeatLoader,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      loading: false,
    }
  },
  methods:{
      handleSubmit: function () {
      this.loading = true;
      var status = true;
      var message = "";
      this.$store.dispatch("auth/register", this.user).then(
        (res) => {
          status = res.token ? true : false;
          message = status ? "Successfully" : res.errors;
          this.$notify({
            group: "top-alert",
            type: status ? "success" : "warn",
            position: "top",
            title: message,
            duration: 2000,
            speed: 100,
          });
          this.loading = false;
          if (status) this.$router.push({ path: "/login" });
        },
        (err) => {
          status = false;
          message = err.response.data.errors;
          this.$notify({
            group: "top-alert",
            type: status ? "success" : "warn",
            position: "top",
            title: message,
            duration: 2000,
            speed: 100,
          });
          this.loading = false;
        }
      );
    },
  }
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