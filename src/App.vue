<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Header";

export default {
  name: "App",
  components: {
    AppHeader
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in .2s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out .2s ease-out forwards;
}

@keyframes slide-in {
  from {
   transform: scale(.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(.9);
    opacity: 0;
  }
}
</style>

