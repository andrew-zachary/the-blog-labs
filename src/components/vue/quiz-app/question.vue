<script setup>
    import { ref } from 'vue';
    import Timer from './timer.vue';

    const { content } = defineProps(['content']);
    const emit = defineEmits(['answer-picked', 'no-answer-picked']);
    const timeout = ref(false);

    const noAnswerPicked = () => {
        emit('no-answer-picked', content, null);
    }

    const answerPicked = (answerId) => {
        emit('answer-picked', content, answerId);
    }

    const notifyAboutTimeout = () => {
        timeout.value = true
    }
</script>
<template>
    <div class="animation-box">
        <Timer :duration="10" @timeoutNotifying="notifyAboutTimeout" @countFinished="noAnswerPicked" />
        <div v-if="!timeout" class="question-content capitalize p-4 mt-8 overflow-hidden">
            <div class="content-box w-full max-w-sm mx-auto">
                <h1 class="text-4xl font-mont font-bold">{{ content.body }}</h1>
                <ul class="mt-8">
                    <li class="text-3xl font-ssp mt-4" v-for="answer of content.answers" :key="answer.id">
                        <span class="p-2 cursor-pointer hover:border-2 hover:border-black" @click="answerPicked(answer.id)">{{ answer.body }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>