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

    <div id="app-container" class="text-6xl font-ssp font-bold relative">

        <transition name="fade" mode="out-in">
            <div id="reset-counting" class="w-full flex justify-center" v-show="isCounting">
                <button type="button" class="p-4 bg-black text-white uppercase" @click="stopCounting">reset</button>
            </div>
        </transition>
        <transition name="fade" mode="out-in">
            <div id="form-box" v-show="!isCounting">
                <form id="date-form" class="w-full flex justify-center max-w-sm mx-auto" @submit.prevent="startCounting" novalidate>
                    <input class="p-4 w-full border-black border-2" ref="source" type="text" placeholder="mm/dd/yyyy" name="event-time" id="event-time" value="" />
                    <button class="p-4 bg-black text-white uppercase" type="submit">start</button>
                    <div v-show="errMsg">
                        {{ errMsg }}
                    </div>
                </form>
            </div>
        </transition>

        <div id="counters-row" class="flex items-center justify-center mt-8">
            <CounterCircle bgColor="black" fontColor="white" borderColor="yellow" borderWidth="8" :count="days" /> <span class="p-2">:</span>
            <CounterCircle bgColor="black" fontColor="white" borderColor="green" borderWidth="8" :count="hrs" /> <span class="p-2">:</span>
            <CounterCircle bgColor="black" fontColor="white" borderColor="pink" borderWidth="8" :count="mins" /> <span class="p-2">:</span>
            <CounterCircle bgColor="black" fontColor="white" borderColor="blue" borderWidth="8" :count="secs" />
        </div>

    </div>

</template>