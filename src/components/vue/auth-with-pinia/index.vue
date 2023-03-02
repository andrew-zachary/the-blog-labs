<script setup>
    import { useCounterStore } from '../../../js/vue/stores/counter.js';

    const counterStore = useCounterStore();
</script>
<style lang="scss"></style>
<template>
    <h1>auth with pinia {{ counterStore.count }}</h1>
    <button @click="counterStore.increment">increment</button>
</template>