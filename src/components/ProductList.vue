<template>
  <div class="product-list">
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.image" :alt="product.title" class="product-image">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <a :href="product.amazonLink" target="_blank" rel="noopener noreferrer" class="amazon-button">
        View on Amazon
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  amazonLink: string;
}

export default defineComponent({
  name: 'ProductList',
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Wireless Bluetooth Headphones',
          description: 'High-quality noise-cancelling headphones with 30-hour battery life and premium sound quality.',
          image: 'https://via.placeholder.com/300x200?text=Headphones',
          amazonLink: 'https://www.amazon.com/example-headphones'
        },
        {
          id: 2,
          title: 'Smart Watch Series 6',
          description: 'Track your fitness goals, heart rate, and get notifications directly on your wrist.',
          image: 'https://via.placeholder.com/300x200?text=SmartWatch',
          amazonLink: 'https://www.amazon.com/example-smartwatch'
        },
        {
          id: 3,
          title: 'Portable Power Bank 20000mAh',
          description: 'Fast-charging power bank with dual USB ports and enough capacity to charge your phone multiple times.',
          image: 'https://via.placeholder.com/300x200?text=PowerBank',
          amazonLink: 'https://www.amazon.com/example-powerbank'
        },
        {
          id: 4,
          title: 'Gaming Mechanical Keyboard',
          description: 'RGB backlit mechanical keyboard with customizable keys and satisfying tactile feedback.',
          image: 'https://via.placeholder.com/300x200?text=Keyboard',
          amazonLink: 'https://www.amazon.com/example-keyboard'
        }
      ] as Product[]
    };
  }
});
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.product {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
}

.product-title {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-description {
  color: #666;
  flex-grow: 1;
  margin-bottom: 16px;
}

.amazon-button {
  background-color: #ff9900;
  color: #000;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s ease;
}

.amazon-button:hover {
  background-color: #ffac33;
}
</style>