<script setup>
    import { ref } from 'vue';

    const { hljs } = defineProps(['hljs']);
    const codeFragment = ref(null);
    const display = ref(false);
    const header = ref('');

    const css = `
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
    `;

    const html = `
    <transition name="zoom-fade" mode="out-in" type="transition">
        <header v-if="animation3Toggle" class="font-mont border-b-2 border-black">
            <h1 class="text-6xl capitalize font-bold">first</h1>
        </header>
        <header v-else class="font-mont border-b-2 border-black">
            <h1 class="text-6xl capitalize font-bold">second</h1>
        </header>
    </transition>
    <div class="mt-8">
        <Button class="text-4xl text-white font-ssp capitalize bg-black p-4" @click="animation3Toggle = !animation3Toggle">toggle zoom-fade</Button>
    </div>
    `;
    
    const highlight = () => setTimeout(() => hljs.highlightAll(), 0);

    const loadCode = (lang) => {
        switch (lang) {
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