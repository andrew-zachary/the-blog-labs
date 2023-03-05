<script setup>
    const { content } = defineProps(['content']);
</script>
<template>
    <div class="question-content capitalize mt-8 overflow-hidden">
        <div class="content-box w-full max-w-sm mx-auto">
            <h1 class="text-4xl font-mont font-bold">{{ content.body }}</h1>
            <ul class="mt-8">
                <li class="text-3xl font-ssp mt-4" v-for="answer of content.answers" :key="answer.id">
                    <span class="p-2 cursor-pointer hover:bg-black hover:text-white">{{ answer.body }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss"></style>