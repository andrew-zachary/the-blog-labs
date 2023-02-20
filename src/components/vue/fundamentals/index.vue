<script setup>
    import { ref } from 'vue';

    import Form from './form.vue';

    const forms = ref([
        {'id': 1},
        {'id': 2}
    ]);
</script>
<style lang="scss"></style>
<template>
    <Form v-for="form in forms" :index="form.id"></Form>
</template>