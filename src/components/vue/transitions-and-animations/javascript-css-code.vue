<script setup>
    import { ref } from 'vue';

    const { hljs } = defineProps(['hljs']);
    const codeFragment = ref(null);
    const display = ref(false);
    const header = ref('');

    const js = `
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
    `;

    const css = `
    .rotate-enter-active, .rotate-leave-active {transition: transform 0.3s linear;}
    .rotate-leave-to {transform: rotate(180deg);}
    .rotate-enter-from {transform: rotate(-180deg);}
    `;

    const html = `
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
        <Button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation5Toggle = !animation5Toggle">toggle javascript + css</Button>
    </div>
    `;
    
    const highlight = () => setTimeout(() => hljs.highlightAll(), 0);

    const loadCode = (lang) => {
        switch (lang) {
            case 'js':
                codeFragment.value = js;
                header.value = 'js'
            break;
            case 'css':
                codeFragment.value = css;
                header.value = 'css'
            break;
            case 'html':
                codeFragment.value = html;
                header.value = 'html'
            break;
        }

        display.value = true;
    };
</script>
<style lang="scss"></style>
<template>
    <div class="mt-8 flex justify-center">

        <Button class="text-3xl text-black font-ssp font-bold uppercase p-2" @click="loadCode('html')">
            <div class="border border-black p-2">html</div>
        </Button>
        <Button class="text-3xl text-black font-ssp font-bold uppercase p-2" @click="loadCode('css')">
            <div class="border border-black p-2">css</div>
        </Button>
        <Button class="text-3xl text-black font-ssp font-bold uppercase p-2" @click="loadCode('js')">
            <div class="border border-black p-2">js</div>
        </Button>

        <Dialog 
            :header="header" 
            v-model:visible="display" 
            :style="{ width: '100vw', height: '100vh' }" 
            :modal="true" :dismissableMask="true"
            :show="highlight()"
            hide="() => console.log('test')"
        >
            <pre>
                <code class="language-css text-3xl">{{ codeFragment }}</code>
            </pre>
        </Dialog>

    </div>
</template>