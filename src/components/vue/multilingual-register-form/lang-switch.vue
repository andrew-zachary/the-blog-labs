<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import meta from '../../../data/meta.json';

const { locale } = useI18n({ useScope: 'global' });
const langRef = ref('العربية');

const changeLocale = () => {
    locale.value = locale.value === 'en'?'ar':'en';
    document.dir = locale.value === 'en'?'ltr':'rtl';
    langRef.value = (Object.values(meta).filter(lang=>lang.name !== locale.value))[0].target;
};
</script>
<style lang="scss"></style>
<template>
    <nav>
        <div class="flex justify-end">
            <button type="submit" class="text-4xl p-4 bg-black text-white" @click="changeLocale">{{ langRef }}</button>
        </div>
    </nav>
</template>