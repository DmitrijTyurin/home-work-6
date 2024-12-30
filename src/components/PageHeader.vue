<template>
    <label>
        <div><slot>Наименование: </slot><input type="search" class="lefti" placeholder="Search..." aria-label="Search" v-model="sName"></input></div>
        <div class="leftb"><slot>Цена от: </slot><input type="number" class="lefti" v-model="sPriceFrom" /></div>
        <div class="leftb"><slot>Цена до: </slot><input type="number" class="lefti" v-model="sPriceTo" /></div>
        <button class="leftb" @click="productStore.setFilter(sName, sPriceFrom, sPriceTo)">Поиск</button>
    </label>
</template>

<script setup>
    import {ref} from "vue";
    import { useProductsStore } from "../stores/products";

    const productStore = useProductsStore()

    const sName = ref('')
    const sPriceFrom = ref(null)
    const sPriceTo = ref(null)
</script>

<style>
    .leftb {
        margin-left: 40px;
    }
    .lefti {
        margin-left: 10px;
    }
    div {
        display:inline-block;
    }
</style>