<script setup>
    import Timer from './timer.vue';
    import Question from './question.vue';

    import { useQuizStore } from '../../../js/vue/stores/quiz';

    const quizStore = useQuizStore();

    const loadNextQuestion = () => {
        console.log("next question");
    };
</script>
<style lang="scss"></style>
<template>
    <Timer :duration="5" @countFinished="loadNextQuestion" />
    <Question v-for="question of quizStore.quiz" :content="question" />
</template>