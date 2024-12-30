<template>
  <Navigation />
  <h1>Магазин</h1>
  <router-view name="default"/>
  <p>&copy; 2024 Сделано на коленке, но с душой</p>
</template>

<script setup>
  import Navigation from "./components/Navigation.vue";
  import { useProductsStore } from "./stores/products";
  import { onBeforeMount } from "vue";

  const productStore = useProductsStore()

  onBeforeMount(() => {
    productStore.getProductData();
    })
</script>