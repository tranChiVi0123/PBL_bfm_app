<template name="card">
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>{{ account.disp_name }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="grey--text ms-4">{{ sub_account.sub_name }}</div>
        <div class="grey--text ms-4">¥ • {{ sub_account.asset_sum }}</div>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>Transactions</v-card-title>
    <div v-for="trans in transactions.slice(0,3)" :key="trans.transaction.id_hash">
      <v-card-text>
      <v-divider class="mx-4"></v-divider>
      {{trans.transaction.content}}
    </v-card-text>
    </div>
    ...
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Refresh
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  props: ["account", "sub_account", "transactions"],
  data() {
    return {
      loading: false,
      selection: 1,
      // transactions:[]
    };
  },
  methods: {
    reserve() {
      this.loading = true;
      // this.transactions(this.sub_account.id_hash);
      setTimeout(() => this.loading = false, 2000);
    }
  },
  // mounted() {
  //   this.reserve()
  // },
};
</script>
