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
        <card-account :account='item.account' :sub_account='sub_account' :transactions='loadTransactions(sub_account.id_hash)'/>  
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      accounts: [],
    };
  },
  computed: {
    ...mapGetters({
      loadTransactions: "transactions/getTransactionsBySubAccountId",
    })
  },
  methods: {
    async fetch_accounts() {
      return await this.$store.dispatch("accounts/fetch_accounts");
    },
    async fetch_transactions() {
      return await this.$store.dispatch("transactions/fetch_transactions")
    }
  },
  created() {
    var vm = this;
    this.fetch_accounts().then((res) => {
      vm.accounts = res.data;
      console.log('Fetch accounts ok');
    });
  
    this.fetch_transactions().then(() => {
      console.log('Fetch transactions ok');
    });
  },
};
</script>
