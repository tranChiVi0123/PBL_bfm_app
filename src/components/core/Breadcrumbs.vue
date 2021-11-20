<template>
  <div>
    <v-breadcrumbs :items="items" divider=">">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items: []
    }
  },
  watch: {'$route' () {
      const vm = this;
      vm.updateBreadcrumbs();
    }
  },
  mounted() {
    const vm = this;
    vm.updateBreadcrumbs();
  },
  methods: {
    updateBreadcrumbs() {
      const vm = this;
      vm.items = vm.$route.meta.breadcrumbs;
    }
  }
};
</script>

<style>
  .breadcrumbs .link {
    text-decoration: none;
    color: #737373;
    font: bold 24px Sans-Serif;
    letter-spacing: -1px;
    white-space: nowrap;
    display: inline-block;
    position: relative;
  }

</style>