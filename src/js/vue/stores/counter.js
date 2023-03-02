import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const increment = () => {
        count.value += 1;
    };
    return { count, increment };
});