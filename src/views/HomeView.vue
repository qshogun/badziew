<template>
  <div class="home-view">
  <!--<AppHeader />-->
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import ProductList from '@/components/ProductList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    AppHeader,
    ProductList
  }
});
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>