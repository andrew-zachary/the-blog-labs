<script setup>
    import { onMounted, ref } from 'vue';
    import { useQuizStore } from '../../../js/vue/stores/quiz.js';

    const {duration} = defineProps(['duration']);
    const emit = defineEmits(['count-finished']);

    const quizStore = useQuizStore();

    const timerInterval = ref(null);
    const questionDurationProgress = ref(0);
    const currentSecound = ref(0);

    onMounted(() => {
        timerInterval.value = setInterval((x) => {
            currentSecound.value += 1;
            questionDurationProgress.value = (currentSecound.value / (duration-1)) * 100;
            if(currentSecound.value === duration) {
                emit('count-finished');
                return clearInterval(timerInterval.value);
            }
        }, 1000);
    });
</script>
<style lang="scss"></style>
<template>
    <div class="px-8">
        <h1 class="font-mont font-light text-9xl text-white flex justify-center">
            <div class="inline-block p-20 leading-none rounded-full bg-black relative">
                <span class="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">{{ currentSecound }}</span>
            </div>
        </h1>
        <div class="mt-8">
            <ProgressBar :value="questionDurationProgress" :showValue="false" />
        </div>
    </div>
</template>