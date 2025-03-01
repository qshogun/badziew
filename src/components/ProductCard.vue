<template>
  <div class="product-card">
    <img :src="product.imageUrl" alt="Product Image" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-description">{{ product.description }}</p>
    <button @click="addToList" class="add-button">Dodaj do listy</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../types/Product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  methods: {
    addToList() {
      // Logic to add the product to the list
      console.log(`${this.product.name} został dodany do listy!`);
    }
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #f9f9f9;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-name {
  font-size: 1.5em;
  margin: 10px 0;
}

.product-description {
  font-size: 1em;
  color: #666;
}

.add-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>