<template>
  <div  class="grid">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStock from "./Stock";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    AppStock
  }
};
</script>


<style>
.grid {
  margin-top: 10rem;
}
</style>


