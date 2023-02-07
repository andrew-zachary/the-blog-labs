<script setup>
    import { reactive } from 'vue';

    const state = reactive({ count: 0 });
    const inc = () => {
        state.count++;
    }
</script>
<style lang="scss"></style>
<template>
    <div id="register-form">
        <button class="text-4xl text-white bg-black" @click="inc">inc-test {{ state.count }}</button>
    </div>
</template>