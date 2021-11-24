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
        <card-account :account='item.account' :sub_account='sub_account'/>  
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
    };
  },
  methods: {
    async fetch_accounts() {
      return await this.$store.dispatch("accounts/fetch_accounts");
    }
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
