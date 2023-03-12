<script setup>
    const { 
        count, 
        bgColor, 
        fontColor, 
        borderColor, 
        borderWidth 
    } = defineProps(['count', 'bg-color', 'font-color', 'borderColor', 'borderWidth']);
</script>
<template>
    <div 
        class="inline-block p-20 relative rounded-full text-6xl"
        :style="{'background-color': bgColor, 'color': fontColor, 'border-color': borderColor, 'border-width': borderWidth+'px' }">
        <span class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">{{ count }}</span>
    </div>
</template>
<style></style>