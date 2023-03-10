<script setup>
    import { ref, computed } from 'vue';

    import { useDateCountDown } from '../../../js/vue/composables/useDateCountDown';

    const { secs, mins, hrs, days } = useDateCountDown(1682805600, 60 * 60 * 1000, () => { console.log('target') });

</script>
<template>
    <div class="text-4xl">{{ days }} : {{ hrs }} : {{ mins }} : {{ secs }}</div>
</template>