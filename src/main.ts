import { createApp } from 'vue';
import App from './App.vue';

// Import base styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/components.css';

// Create Vue app
const app = createApp(App);

// Mount the app
app.mount('#app');