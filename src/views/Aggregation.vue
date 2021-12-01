<template>
  <div>
    <div class="position-relative">
      <v-otp-input
          ref="otpInput"
          input-classes="otp-input"
          separator="-"
          :num-inputs="6"
          v-model="otp"
          :disabled="loading"
          @on-complete="onFinish"
          class="style-1"
          size="24"
        ></v-otp-input>
        <v-overlay absolute :value="loading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-overlay>
      </div>
    <div class="text--caption">Type or copy/paste.</div>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ text }}
    </v-snackbar>
  </div>
</template>


<script>
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
      this.$store
        .dispatch("aggregate", rsp)
        .then(() => {
          setTimeout(() => {
            this.loading = false;
            this.snackbarColor = "success";
            this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`;
            this.snackbar = true;
            vm.$router.push("/");
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

<style>
.position-relative {
  position: relative;
  padding-left: 36%;
  padding-right: auto;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
