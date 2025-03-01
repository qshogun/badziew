<template>
  <header class="app-header">
    <h1>Badziew</h1>
    <nav>
      <ul>
        <!--<li><a href="#/home">Strona główna</a></li>-->
        <li><a href="#/about">O nas</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>

<style scoped>
.app-header {
  background-color: #ffcc00;
  padding: 20px;
  text-align: center;
}

.app-header h1 {
  font-size: 2.5em;
  margin: 0;
}

.app-header nav ul {
  list-style-type: none;
  padding: 0;
}

.app-header nav ul li {
  display: inline;
  margin: 0 15px;
}

.app-header nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.app-header nav ul li a:hover {
  text-decoration: underline;
}
</style>