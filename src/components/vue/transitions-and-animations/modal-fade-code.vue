<script setup>
    import { ref } from 'vue';

    const { hljs } = defineProps(['hljs', 'show']);
    const codeFragment = ref(null);
    const display = ref(false);
    const header = ref('');

    const css = `
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease-in-out;
    }`;

    const html = `
    <transition name="fade" mode="out-in">
        <header v-if="animation1Toggle" class="font-mont">
            <h1 class="text-6xl capitalize font-bold">first</h1>
        </header>
        <header v-else class="font-mont">
            <h1 class="text-6xl capitalize font-bold">second</h1>
        </header>
    </transition>
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
                <code class="language-css text-4xl">{{ codeFragment }}</code>
            </pre>
        </Dialog>

    </div>
</template>