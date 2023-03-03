<script setup>
    import { useCounterStore } from '../../../js/vue/stores/counter.js';

    const counterStore = useCounterStore();
</script>
<style lang="scss"></style>
<template>
    <div class="text-4xl">
        <h1 :class="counterStore.successStyleClasses">auth with pinia {{ counterStore.count }}</h1>
        <div>
            <input type="text" ref="amount" />
        </div>
        <button @click="counterStore.update($refs.amount.value)">update</button>
    </div>
</template>