<script setup>
    import { ref, watch } from 'vue';

    const props = defineProps([ 'count', 'countFrom', 'bg-color', 'font-color', 'borderColor', 'borderWidth']);

    const ratingCircle = ref(null);

    watch(()=> props.count, count => {
        const totalLength = ratingCircle.value.getTotalLength();
        const lengthToAnimate = totalLength - Math.floor( ( count / props.countFrom ) * 100 );
        ratingCircle.value.setAttribute('stroke-dasharray', totalLength);
        ratingCircle.value.setAttribute('stroke-dashoffset', lengthToAnimate);
    });
</script>
<template>
    <div 
        class="circle-counter inline-block relative rounded-full"
        :style="{'background-color': props.bgColor, 'color': props.fontColor}">
        <span class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">{{ count }}</span>
        <svg className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full w-full" viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                stroke-linecap="round" 
                stroke="#f0edc4" 
                :stroke-width="borderWidth" 
                fill="none" 
                stroke-dasharray="100, 100" 
            />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                id="rating-circle"
                ref="ratingCircle"
                stroke-linecap="round" 
                :stroke="borderColor" 
                :stroke-width="borderWidth"
                fill="none"
                stroke-dashoffset="100"
            />
        </svg>
    </div>
</template>
<style></style>