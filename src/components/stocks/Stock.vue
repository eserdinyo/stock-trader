<template>
<div class="col-md-10">
    <div class="card bg-info  text-white">
      <div class="card-heading">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
          </h3>
      </div>
      <div class="card-body">
        <div class=" inputs">
          <input 
          style="width: 200px"
          type="number" 
          class="form-control" 
          placeholder="Quantity"
          :class="{danger: yetersizFunds}"
          v-model="quantity">

          <button 
          class="btn btn-dark"
          @click="buyStock"
          :disabled="quantity < 1 || yetersizFunds">
          {{yetersizFunds ? 'Yetersiz Bakiye' : 'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    yetersizFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>


<style>
.danger {
  border: 1px solid red !important;
  outline: 1px solid red !important;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 5rem;
  justify-items: center;
}
.inputs {
  display: flex;
  justify-content: space-between;
}
</style>

