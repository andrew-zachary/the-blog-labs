import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const successStyleClasses = computed(() => count.value > 1000?'bg-black text-white':'');
    const update = (amount) => {
        console.log(amount);
        count.value += parseInt(amount);
    };
    return { count, update, successStyleClasses };
});