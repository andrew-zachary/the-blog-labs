import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import veevalidate from './plugins/veevalidate.js';

//locales
import en from '../../locales/en.json';
import ar from '../../locales/ar.json';

import App from '../../components/vue/register-form-subform/index.vue';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackRoot: 'en',
    messages: {en, ar}
});

const registerFormSubform = createApp(App);
registerFormSubform.component('Button', Button);
registerFormSubform.use(i18n).use(PrimeVue).use(veevalidate).mount('#app');