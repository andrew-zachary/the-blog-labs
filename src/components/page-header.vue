<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import meta from '../data/meta.json';

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
    <header>
        <h1 class="text-8xl">{{ $t("home.hello.title") }}</h1>
        <button type="submit" class="mt-12 text-4xl p-4 bg-black text-white" @click="changeLocale">{{ langRef }}</button>
    </header>
</template>