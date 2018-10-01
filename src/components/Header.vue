<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <router-link class="navbar-brand" to="/">Stock Trader</router-link>
 

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" class="nav-link" active-class="active"><a>Portfolio</a></router-link>
      <router-link to="/stocks" class="nav-link"  active-class="active"><a>Stocks</a></router-link>
    </ul>
    <ul class="navbar-nav">
      <a href="#" class="nav-link text-white">My Funds: {{funds}}</a>
    </ul>
    <ul class="navbar-nav ml-auto mr-auto">
      <a href="#" class="nav-link">End Day</a>
    </ul>
    
    <ul class="navbar-nav ml-auto">

      <a href="#" class="nav-link"><a>Save</a></a>
      <a href="#" class="nav-link"><a>Load</a></a>
    </ul>
    
  </div>
</nav>
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

