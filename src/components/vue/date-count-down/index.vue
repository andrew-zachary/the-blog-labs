<script setup>
    import { ref } from 'vue';

    import { useDateCountDown } from '../../../js/vue/composables/useDateCountDown';

    import CounterCircle from './counter-circle.vue';

    const source = ref(null);

    const { 
        secs, 
        mins, 
        hrs, 
        days,
        startCounting,
        stopCounting,
        isCounting,
        errMsg
    } = useDateCountDown(source, () => { console.log('target') });
</script>
<template>

    <div id="app-container" class="px-2 font-ssp font-bold relative">

        <transition name="fade">
            <div 
                id="reset-counting" 
                class="flex items-end justify-center 
                w-full max-w-md mx-auto" 
                v-show="isCounting"
            >
                <button type="button" class="p-4 border-black border-2 bg-black text-white uppercase" @click="stopCounting">reset</button>
            </div>
        </transition>
        <transition name="fade">
            <div 
                id="form-box" 
                class="flex flex-col justify-end 
                w-full max-w-md mx-auto" 
                v-show="!isCounting"
            >
                <form 
                    id="date-form" 
                    class="w-full flex justify-center" 
                    @submit.prevent="startCounting" 
                    novalidate
                    autocomplete="off"
                >
                    <input 
                        class="p-4 
                        w-full 
                        border-black border-2 
                        placeholder:text-gray-500" 
                        ref="source" 
                        type="datetime-local" 
                        placeholder="mm/dd/yyyy" 
                        name="event-time" 
                        id="event-time" value="" 
                    />
                    <button class="p-4 bg-black text-white uppercase" type="submit">start</button>
                </form>
                <div id="form-feedback" class="mt-10 font-ssp font-bold text-red-700" v-show="errMsg">
                    <p class="text-center capitalize">* {{ errMsg }}</p>
                </div>
            </div>
        </transition>

        <div id="counters-row" class="mt-8 max-w-md mx-auto">
            <CounterCircle bgColor="#dae4f9" fontColor="black" borderColor="red" borderWidth="2" :count="days" :countFrom="days" /> <span>:</span>
            <CounterCircle bgColor="#dae4f9" fontColor="black" borderColor="orange" borderWidth="2" :count="hrs" :countFrom="24" /> <span>:</span>
            <CounterCircle bgColor="#dae4f9" fontColor="black" borderColor="black" borderWidth="2" :count="mins" :countFrom="60" /> <span>:</span>
            <CounterCircle bgColor="#dae4f9" fontColor="black" borderColor="blue" borderWidth="2" :count="secs" :countFrom="60" />
        </div>

    </div>

</template>