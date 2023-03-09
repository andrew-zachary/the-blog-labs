<script setup>
    import { ref, computed } from 'vue';

    import { useDateCountDown } from '../../../js/vue/composables/useDateCountDown';

    const { secs, mins } = useDateCountDown(1678397400, 60 * 60 * 1000, () => { console.log('target') });

</script>
<template>
    <div ref="refTest1" class="text-4xl">{{ mins }} : {{ secs }}</div>
</template>