<script setup>
    const { content } = defineProps(['content']);
</script>
<template>
    <h1>{{ content.body }}</h1>
    <ul>
        <li v-for="answer of content.answers">{{ answer.body }}</li>
    </ul>
</template>
<style lang="scss"></style>