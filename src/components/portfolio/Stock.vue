<template>
<div class="col-md-10">
    <div class="card bg-success text-white">
      <div class="card-heading">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
          </h3>
      </div>
      <div class="card-body">
        <div class="inputs">
          <input 
          type="number" 
          style="width: 200px"
          class="form-control" 
          placeholder="Quantity"
          :class="{danger: yetersizQuantity}"
          v-model="quantity">
          <button 
          class="btn btn-dark"
          @click="sellStock"
          :disabled="yetersizQuantity || quantity < 1">
            {{yetersizQuantity ? 'Not enough Stocks': 'Sell'}}
          </button>
        </div>
 
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    yetersizQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>


<style>
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
.danger {
  border: 1px solid red;
  outline: 1px solid red;
}
</style>

