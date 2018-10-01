<template>
  <div class="grid">
   <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>


<script>
import AppStock from "./Stock.vue";
export default {
  components: {
    AppStock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
.grid {
  margin-top: 10rem;
}
</style>




