<script setup>
    import Timer from './timer.vue';

    const { content } = defineProps(['content']);
    const emit = defineEmits(['answer-picked', 'no-answer-picked']);

    const noAnswerPicked = () => {
        emit('no-answer-picked', content, null);
    }

    const answerPicked = (answerId) => {
        emit('answer-picked', content, answerId);
    }
</script>
<template>
    <Timer :duration="15" @countFinished="noAnswerPicked" />
    <div class="question-content capitalize p-4 mt-8 overflow-hidden">
        <div class="content-box w-full max-w-sm mx-auto">
            <h1 class="text-4xl font-mont font-bold">{{ content.body }}</h1>
            <ul class="mt-8">
                <li class="text-3xl font-ssp mt-4" v-for="answer of content.answers" :key="answer.id">
                    <span class="p-2 cursor-pointer hover:border-2 hover:border-black" @click="answerPicked(answer.id)">{{ answer.body }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss"></style>