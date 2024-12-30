<template>
    <div class="container">
        <header class="bottom">
            <page-header />
        </header>
        <main>
            <page-main />
        </main>
    </div>
</template>

<script setup>
    import PageHeader from './components/PageHeader.vue';
    import PageMain from './components/PageMain.vue';
</script>

<style scoped>
    .bottom {
        margin-bottom: 40px;
    }
</style>