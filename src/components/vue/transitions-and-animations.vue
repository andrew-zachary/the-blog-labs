<script setup>
    import {ref} from 'vue';

    const animation1Toggle = ref(true);
    const animation2Toggle = ref(true);
</script>
<style lang="scss">
    //fade-animation
    .fade-enter-from, .fade-leave-to {opacity: 0;}
    
    //zoom-animation with opacity-transition
    .zoom-enter-active {
        animation: zoom-in 1s ease-in-out;
        transition: opacity 3s linear;
    }
    .zoom-leave-active {
        animation: zoom-out 1s ease-out;
        transition: opacity 0.3s linear;
    }
    .zoom-enter-from {
        opacity: 0;
    }
    .zoom-leave-to {
        opacity: 0;
    }
    @keyframes zoom-in{
        from {transform: scale(0,0);}
        to {transform: scale(1,1);}
    }
    @keyframes zoom-out{
        from {transform: scale(1,1);}
        to {transform: scale(0,0);}
    }
</style>
<template>
    <div id="fade-animation" class="p-8">
        <transition name="fade">
            <header v-show="animation1Toggle" class="font-mont transition-opacity duration-300 ease-linear">
                <h1 class="text-6xl capitalize font-bold">basic</h1>
            </header>
        </transition>
        <div class="mt-8">
            <button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation1Toggle = !animation1Toggle">toggle fade</button>
        </div>
    </div>
    <div id="zoom-animation" class="p-8">
        <transition name="zoom" mode="out-in" type="animation">
            <header v-if="animation2Toggle" class="font-mont transition-opacity duration-300 ease-linear">
                <h1 class="text-6xl capitalize font-bold">first</h1>
            </header>
            <header v-else class="font-mont transition-opacity duration-300 ease-linear">
                <h1 class="text-6xl capitalize font-bold">second</h1>
            </header>
        </transition>
        <div class="mt-8">
            <button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation2Toggle = !animation2Toggle">toggle zoom</button>
        </div>
    </div>
</template>