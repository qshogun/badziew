<template>
  <div id="app">
    <AppHeader />
    <main>
      <HomeView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
import HomeView from './views/HomeView.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    HomeView
  }
});
</script>

<style>
@import './assets/styles/main.css';
</style>