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
        isCounting,
        errMsg
    } = useDateCountDown(source, () => { console.log('target') });
</script>
<template>
    <div id="app-container">
        <div v-show="isCounting" id="reset-counting">
            <button type="button" @click="stopCounting">reset</button>
        </div>
        <form v-show="!isCounting" @submit.prevent="startCounting" novalidate>
            <input ref="source" type="text" placeholder="mm/dd/yyyy" name="event-time" id="event-time" value="" />
            <button type="submit">start</button>
            <div v-show="errMsg">
                {{ errMsg }}
            </div>
        </form>
        <div>{{ days }} : {{ hrs }} : {{ mins }} : {{ secs }}</div>
    </div>
</template>