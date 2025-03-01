<template>
  <div id="app">
    <header>
      <h1>Badziew</h1>
    </header>
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductList from './components/ProductList.vue';

export default defineComponent({
  name: 'App',
  components: {
    ProductList
  }
});
</script>

<style>
@import './assets/styles/main.css';

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #f5f5f7;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #333;
}
</style>