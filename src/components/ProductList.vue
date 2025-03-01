<template>
  <div class="product-list">
    <h2 class="product-list-title">Brzydkie. Na co ci to?</h2>
    
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image">
          <img :src="product.imageUrl" :alt="product.name">
        </div>
        
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <div class="product-price">{{ product.price.toFixed(2) }} PLN</div>
          
          <div class="product-meta">
            <span class="product-rating">
              <span class="stars">{{ '★'.repeat(Math.round(product.rating)) }}{{ '☆'.repeat(5 - Math.round(product.rating)) }}</span>
              <span class="rating-value">{{ product.rating.toFixed(1) }}</span>
            </span>
          </div>
          
          <p class="product-description">{{ product.description }}</p>
          
          <div class="product-actions">
            <a :href="product.aliExpressUrl" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="aliexpress-btn">
              View on AliExpress
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uselessProducts from '../data/uselessProducts.js';

export default {
  name: 'ProductList',
  data() {
    return {
      products: uselessProducts
    };
  }
};
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.product-list-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  color: #e63946;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.product-card {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  background: white;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  overflow: hidden;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-details {
  padding: 15px;
}

.product-name {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.product-price {
  font-size: 22px;
  font-weight: bold;
  color: #e63946;
  margin-bottom: 10px;
}

.product-meta {
  margin-bottom: 10px;
  font-size: 14px;
}

.stars {
  color: #ffc107;
  letter-spacing: -2px;
}

.rating-value {
  margin-left: 5px;
  color: #666;
}

.product-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
}

.product-actions {
  display: flex;
}

.aliexpress-btn {
  flex-grow: 1;
  background: #ff4747;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.2s;
  display: inline-block;
}

.aliexpress-btn:hover {
  background: #e03838;
}
</style>