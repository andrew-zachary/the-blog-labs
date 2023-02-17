<script setup>
    import { toRefs } from 'vue';
    const props = defineProps(['hljs', 'show']);
    const { hljs, show } = toRefs(props);

    const highlight = () => setTimeout(() => hljs.value.highlightAll(), 0);

    const css = `
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease-in-out;
    }`;
</script>
<style lang="scss"></style>
<template>
    <Dialog 
        header="CSS" 
        v-model:visible="show" 
        :style="{ width: '100vw', height: '100vh' }" 
        :modal="true" :dismissableMask="true"
        :show="highlight()"
        hide="() => console.log('test')"
    >
        <pre>
            <code class="language-css text-4xl">{{ css }}</code>
        </pre>
    </Dialog>
</template>