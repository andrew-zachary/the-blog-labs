<script setup>
    import { onMounted } from 'vue';

    import Question from './question.vue';

    import { useQuizStore } from '../../../js/vue/stores/quiz';

    const quizStore = useQuizStore();

    onMounted(() => {
        quizStore.paginate();
    });

    const loadNextQuestion = (question, answerId) => {
        quizStore.updateProgress(question, answerId);
        quizStore.paginate();
    };
</script>
<style lang="scss"></style>
<template>
    <transition name="fade" mode="out-in">
        <div v-if="quizStore.quizFinished" class="p-2 flex flex-col items-center">
            <h1 class="text-6xl font-mont font-bold capitalize">
                <span>finished</span>
            </h1>
            <h2 class="text-3xl font-ssp font-bold capitalize mt-2">
                <span class="px-2">score: {{ quizStore.score }} / 5</span>
            </h2>
            <div class="mt-4 px-2">
                <ul>
                    <li class="mt-8" v-for="row in quizStore.result">
                        <h1 class="text-4xl font-mont font-bold">{{ row.body }}</h1>
                        <div class="text-2xl font-ssp capitalize mt-4">
                            <div class="feedback flex items-center">
                                <span>{{ row.userAnswer.body }}</span>
                                <span class="px-3.5 py-3 m-2 bg-black text-white rounded-full flex justify-center items-center max-w-[3rem]"><i :class="['pi', row.answerisRight?'pi-check':'pi-times']"></i></span>
                            </div>
                            <div v-if="!row.answerisRight">
                                <span class="font-bold">right answer is </span>
                                <span class="font-regular">{{ row.rightAnswer.body }}</span> 
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mt-4">
                <button class="text-4xl font-ssp font-bold bg-black text-white capitalize px-4 py-2" @click="quizStore.restartQuiz">restart quiz</button>
            </div>
        </div>
        <div v-else id="question-box" class="relative overflow-hidden">
            <template v-for="question of quizStore.quiz.items" :key="question.id">
                <transition name="fade" mode="out-in">
                    <Question 
                        :content="question" 
                        v-if="question.id === quizStore.currentQuestionId" 
                        @answerPicked="loadNextQuestion"
                        @noAnswerPicked="loadNextQuestion"
                    />
                </transition>
            </template>
        </div>
    </transition>
</template>