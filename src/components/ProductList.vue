<template>
  <div class="product-list">
    <h2>Lista produktów</h2>
    <div class="product-list__grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from './ProductCard.vue';
import { Product } from '../types/Product';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
});
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.product-list__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>