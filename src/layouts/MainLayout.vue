<template>
  <div class="app-container">
    <header class="app-header">
      <div class="container">
        <nav class="main-nav">
          <div class="logo">AppName</div>
          <div class="nav-toggle" @click="toggleMenu">
            <span></span><span></span><span></span>
          </div>
          <div class="nav-links" :class="{ active: menuOpen }">
            <a href="/" class="nav-link">Home</a>
            <a href="/products" class="nav-link">Products</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/contact" class="nav-link">Contact</a>
          </div>
        </nav>
      </div>
    </header>
    
    <main class="app-main">
      <div class="container">
        <slot></slot>
      </div>
    </main>
    
    <footer class="app-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About Us</h3>
            <p>Modern and clean design for your needs.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div class="copyright">
          © {{ new Date().getFullYear() }} AppName. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const menuOpen = ref(false)
    
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }
    
    return {
      menuOpen,
      toggleMenu
    }
  }
})
</script>

<style scoped>
@import '../styles/variables.css';

/* Styles will be applied only to this component */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: 1.25rem;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-base);
  transition: var(--transition-base);
}

.nav-link:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-primary);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--color-text);
  border-radius: 3px;
  transition: var(--transition-base);
}

.app-main {
  flex-grow: 1;
  padding: 2.5rem 0;
  background-color: var(--color-bg);
}

.app-footer {
  background-color: var(--color-white);
  padding: 2.5rem 0 1.25rem;
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  text-decoration: none;
  color: var(--color-text);
  transition: var(--transition-base);
}

.footer-section a:hover {
  color: var(--color-primary);
}

.copyright {
  text-align: center;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.875rem;
  color: var(--color-text-light);
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    box-shadow: var(--shadow-md);
    clip-path: circle(0px at top right);
    transition: clip-path 0.3s ease-in-out;
    pointer-events: none;
  }
  
  .nav-links.active {
    clip-path: circle(150% at top right);
    pointer-events: all;
  }
}
</style>
