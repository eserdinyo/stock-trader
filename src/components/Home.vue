<template>
  <div class="container ">
    <div>
      <h1>Trade or view your Portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>Click 'End Day' to begin a New Day!</h6>
    <hr>
    <p>Your Funds: <b>{{funds}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
