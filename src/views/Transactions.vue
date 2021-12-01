<template>
  <div class="transactions">
    <h1>This is an transactions search page</h1>
    <table-transactions :transactions='formatTransactions'/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TableTransactions from "../components/TableTransactions.vue";

export default {
  components: { TableTransactions },
  data() {
    return {
      accounts: [],
      transactions: [],
    };
  },
  computed: {
    ...mapGetters({
      formatTransactions: "transactions/formatTransactions",
    }),
  },
  methods: {
    async fetch_accounts() {
      return await this.$store.dispatch("accounts/fetch_accounts");
    },
    async fetch_transactions() {
      return await this.$store.dispatch("transactions/fetch_transactions");
    },
  },
  created() {
    var vm = this;
    this.fetch_accounts().then((res) => {
      vm.accounts = res.data;
      console.log("Fetch accounts ok");
    });

    this.fetch_transactions().then((res) => {
      vm.transactions = res.data;
      console.log("Fetch transactions ok");
    });
  },
};
</script>
