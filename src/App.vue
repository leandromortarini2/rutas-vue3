<template>
  <nav class="flex gap-3">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/features">Features</RouterLink>
    <RouterLink to="/pricing">Pricing</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <main class="bg-slate-200">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
// import HomePage from './modules/landing/pages/HomePage.vue';
</script>
