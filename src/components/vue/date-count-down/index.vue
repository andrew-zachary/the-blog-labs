<script setup>
    import { ref } from 'vue';

    import { useDateCountDown } from '../../../js/vue/composables/useDateCountDown';

    const source = ref(null);

    const { 
        secs, 
        mins, 
        hrs, 
        days,
        startCounting,
        stopCounting,
        isCounting
    } = useDateCountDown(source, () => { console.log('target') });
</script>
<template>
    <div v-show="isCounting" id="reset-counting">
        <button type="button" @click="stopCounting">reset</button>
    </div>
    <form v-show="!isCounting" @submit.prevent="startCounting">
        <input ref="source" type="datetime-local" name="event-time" id="event-time" value="" />
        <button type="submit">start</button>
    </form>
    <div>{{ days }} : {{ hrs }} : {{ mins }} : {{ secs }}</div>
</template>