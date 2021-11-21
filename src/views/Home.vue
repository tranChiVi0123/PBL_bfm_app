<template>
  <div class="home">
    <h1>BFM Aggregation Account</h1>
    <v-container class="grey lighten-5">
      <v-row
        v-for="item in accounts"
        :key="item.account.id"
        :class="accounts.length === 1 ? 'mb-6' : ''"
        no-gutters
      >
        <v-col
          v-for="sub_account in item.account.sub_accounts"
          :key="sub_account.id_hash"
        >
          <template name="card">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-card-title>{{
                item.account.disp_name
              }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div class="grey--text ms-4">{{ sub_account.sub_name }}</div>
                  <div class="grey--text ms-4">¥ • {{ sub_account.asset_sum }}</div>
                </v-row>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title>Transactions</v-card-title>
              <v-card-text>
                <v-divider class="mx-4"></v-divider>
                transaction 1
                <v-divider class="mx-4"></v-divider>
                transaction 2
                <v-divider class="mx-4"></v-divider>
                transaction 3
              </v-card-text>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Refresh
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [],
      loading: false,
      selection: 1,
    };
  },
  methods: {
    async fetch_accounts() {
      return await this.$store.dispatch("accounts/fetch_accounts");
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  created() {
    var vm = this;
    this.fetch_accounts().then((res) => {
      vm.accounts = res.data;
      console.log(vm.accounts);
    });
  },
};
</script>
