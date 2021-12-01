<template>
  <div>
    <div class="ma-auto position-relative" style="max-width: 300px">
      <v-otp-input
        v-model="otp"
        :disabled="loading"
        @finish="onFinish"
      ></v-otp-input>
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
    </div>
    <!-- <div>
      Expected value: <span class="font-weight-bold">{{ expectedOtp }}</span>
    </div> -->
    <div class="text--caption">Type or copy/paste.</div>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ text }}
    </v-snackbar>
  </div>
</template>


<script>
// import apiCaller from "../common/api_caller";

export default {
  data: () => ({
    loading: false,
    snackbar: false,
    snackbarColor: "default",
    otp: "",
    text: "",
    expectedOtp: "133707",
  }),
  methods: {
    async onFinish(rsp) {
      var vm = this;
      this.loading = true;
      this.$store.dispatch('aggregate', rsp).then(() => {
           setTimeout(() => {
            this.loading = false;
            this.snackbarColor = "success";
            this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`;
            this.snackbar = true;
            vm.$router.push('/')
          }, 1000);
        })
        .catch((err) => {
          setTimeout(() => {
            this.loading = false;
            this.snackbarColor = "warning";
            this.text = err.response.data.errors;
            this.snackbar = true;
          }, 1000);
        });
    },
  },
};
</script>

<style scoped>
.position-relative {
  position: relative;
}
</style>
