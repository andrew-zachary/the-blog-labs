<script setup>
    import { onMounted } from 'vue';

    import Timer from './timer.vue';
    import Question from './question.vue';

    import { useQuizStore } from '../../../js/vue/stores/quiz';

    const quizStore = useQuizStore();

    onMounted(() => {
        quizStore.paginate();
    });

    const loadNextQuestion = () => {
        quizStore.paginate();
    };
</script>
<style lang="scss"></style>
<template>
    <div v-if="quizStore.quizFinished" class="flex flex-col items-center">
        <h1 class="text-6xl font-mont font-bold capitalize">finished</h1>
        <div class="mt-4">
            <button class="text-4xl font-ssp font-bold bg-black text-white capitalize px-4 py-2" @click="quizStore.restartQuiz">restart quiz</button>
        </div>
    </div>
    <div v-else>
        <Timer :duration="2" @countFinished="loadNextQuestion" />
        <div id="question-box" class="relative">
            <template v-for="question of quizStore.quiz.items" :key="question.id">
                <Question :content="question" v-if="question.id === quizStore.currentQuestionId" />
            </template>
        </div>
    </div>
</template>