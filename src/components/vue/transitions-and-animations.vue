<script setup>
    import {ref} from 'vue';

    const animation1Toggle = ref(true);
    const animation2Toggle = ref(true);
    const animation3Toggle = ref(true);
    const animation4Toggle = ref(true);
    const animation5Toggle = ref(true);
    const animation6Toggle = ref(true);

    const roundsNum = ref(0);

    // using javascript
    const beforeEnter1 = (el) => {
        console.log('before-enter');
    }
    const enter1 = (el, done) => {
        const animation = el.animate([{'transform': 'scale(2, 0)'}, {}], {'duration': 300});
        animation.onfinish = () => done();
    }
    const afterEnter1 = (el) => {
        console.log('after-enter');
    }
    const beforeLeave1 = (el) => {
        console.log('before-leave');
    }
    const leave1 = (el, done) => {
        const animation = el.animate([{}, {'transform': 'scale(0, 0)'}], {'duration': 1000});
        animation.onfinish = () => done();
    }
    const afterLeave1 = (el) => {
        console.log('after-leave');
    }

    // using both javascript and css
    const beforeEnter2 = (el) => {
        console.log('before-enter');
    }
    const enter2 = (el) => {
        console.log('enter');
    }
    const afterEnter2 = (el) => {
        console.log('after-enter');
        roundsNum.value += 1;
    }
    const beforeLeave2 = (el) => {
        console.log('before-leave');
    }
    const leave2 = (el) => {
        console.log('leave');
    }
    const afterLeave2 = (el) => {
        console.log('after-leave');
    }

</script>
<style lang="scss">
    // using css transitions
    .fade-enter-from, .fade-leave-to {opacity: 0;}
    .fade-enter-active, .fade-leave-active {transition: opacity 0.3s ease-in-out;}
    
    // using css animations
    .zoom-enter-active {animation: zoom-in 1s ease-in-out;}
    .zoom-leave-active {animation: zoom-out 1s ease-in-out;}
    @keyframes zoom-in {
        from {transform: scale(0,0);}
        to {transform: scale(1,1);}
    }
    @keyframes zoom-out {
        from {transform: scale(1,1);}
        to {transform: scale(0,0);}
    }

    // using css transitions and animations together
    .zoom-fade-enter-active {
        animation: zoom-in 0.3s ease-in-out;
        transition: opacity 1s ease-in-out;
    }
    .zoom-fade-leave-active {
        animation: zoom-out 1s ease-in-out;
        transition: opacity 0.3s ease-in-out;
    }
    .zoom-fade-enter-from, .zoom-fade-leave-to {opacity: 0;}
    @keyframes zoom-in {
        from {transform: scale(0,0);}
        to {transform: scale(1,1);}
    }
    @keyframes zoom-out {
        from {transform: scale(1,1);}
        to {transform: scale(0,0);}
    }

    // using javascript and css
    .rotate-enter-active, .rotate-leave-active {transition: transform 0.3s linear;}
    .rotate-leave-to {transform: rotate(180deg);}
    .rotate-enter-from {transform: rotate(-180deg);}

    // using classes
    .animate__animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    @keyframes rubberBand {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }

        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }

        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }

        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }

        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }
    .animate__rubberBand {
        -webkit-animation-name: rubberBand;
        animation-name: rubberBand;
    }
    @keyframes fadeOutRight {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
    .animate__fadeOutRight {
        -webkit-animation-name: fadeOutRight;
        animation-name: fadeOutRight;
    }
</style>
<template>
    <div id="fade-animation" class="p-8">

        <div class="animation-box overflow-hidden">
            
            <transition name="fade" mode="out-in">
                <header v-if="animation1Toggle" class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">first</h1>
                </header>
                <header v-else class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">second</h1>
                </header>
            </transition>
            <div class="mt-8">
                <button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation1Toggle = !animation1Toggle">toggle fade</button>
            </div>

        </div>
    </div>
    <div id="zoom-animation" class="p-8">

        <div class="animation-box overflow-hidden">

            <transition name="zoom" mode="out-in">
                <header v-if="animation2Toggle" class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">first</h1>
                </header>
                <header v-else class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">second</h1>
                </header>
            </transition>
            <div class="mt-8">
                <button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation2Toggle = !animation2Toggle">toggle zoom</button>
            </div>

        </div>
    </div>
    <div id="zoom-fade-animation" class="p-8">

        <div class="animation-box overflow-hidden">

            <transition name="zoom-fade" mode="out-in" type="transition">
                <header v-if="animation3Toggle" class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">first</h1>
                </header>
                <header v-else class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">second</h1>
                </header>
            </transition>
            <div class="mt-8">
                <button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation3Toggle = !animation3Toggle">toggle zoom-fade</button>
            </div>

        </div>
    </div>
    <div id="scale-animation" class="p-8">

        <div class="animation-box overflow-hidden">

            <transition 
                @before-enter="beforeEnter1"
                @enter="enter1"
                @after-enter="afterEnter1"
                @before-leave="beforeLeave1"
                @leave="leave1"
                @after-leave="afterLeave1"
                :css="false"
                mode="out-in"
            >
                <header v-if="animation4Toggle" class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">first</h1>
                </header>
                <header v-else class="font-mont">
                    <h1 class="text-6xl capitalize font-bold">second</h1>
                </header>
            </transition>
            <div class="mt-8">
                <button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation4Toggle = !animation4Toggle">toggle javascript scale</button>
            </div>

        </div>
    </div>
    <div id="rotate-animation" class="p-8">

        <div class="animation-box overflow-hidden">

            <transition 
                @before-enter="beforeEnter2"
                @enter="enter2"
                @after-enter="afterEnter2"
                @before-leave="beforeLeave2"
                @leave="leave2"
                @after-leave="afterLeave2"
                name="rotate"
                :css="true"
                mode="out-in"
            >
                <header v-if="animation5Toggle" class="font-mont border-b-2 border-black">
                    <h1 class="text-6xl capitalize font-bold">first</h1>
                </header>
                <header v-else class="font-mont border-b-2 border-black">
                    <h1 class="text-6xl capitalize font-bold">second</h1>
                </header>
            </transition>
            <div class="text-4xl font-ssp capitalize mt-8">
                <p class="mt-4 p-4">num of rounds {{ roundsNum }}</p>
                <button class="mt-4 p-4 text-white bg-black" @click="animation5Toggle = !animation5Toggle">toggle javascript + css</button>
            </div>

        </div>

    </div>
    <div id="rotate-animation" class="p-8">

        <div class="animation-box overflow-hidden">

            <transition 
                enter-active-class="animate__animated animate__rubberBand"
                leave-active-class="animate__animated animate__fadeOutRight"
                mode="out-in"
            >
                <header v-if="animation6Toggle" class="font-mont border-b-2 border-black">
                    <h1 class="text-6xl capitalize font-bold">first</h1>
                </header>
                <header v-else class="font-mont border-b-2 border-black">
                    <h1 class="text-6xl capitalize font-bold">second</h1>
                </header>
            </transition>
            <div class="text-4xl font-ssp capitalize mt-8">
                <button class="p-4 text-white bg-black" @click="animation6Toggle = !animation6Toggle">toggle classes</button>
            </div>

        </div>

    </div>
</template>