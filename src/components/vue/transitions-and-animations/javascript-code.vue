<script setup>
    import { ref } from 'vue';

    const { hljs } = defineProps(['hljs']);
    const codeFragment = ref(null);
    const display = ref(false);
    const header = ref('');

    const js = `
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
    `;

    const css = ``;

    const html = `
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
        <header v-if="animation4Toggle" class="font-mont border-b-2 border-black">
            <h1 class="text-6xl capitalize font-bold">first</h1>
        </header>
        <header v-else class="font-mont border-b-2 border-black">
            <h1 class="text-6xl capitalize font-bold">second</h1>
        </header>
    </transition>
    <div class="mt-8">
        <Button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation4Toggle = !animation4Toggle">toggle javascript scale</Button>
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