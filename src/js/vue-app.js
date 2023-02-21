import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

//includes
import veevalidate from './vue-app-veevalidate-plugin.js';

//locales
import en from '../locales/en.json';
import ar from '../locales/ar.json';

import App from '../components/vue/multilingual-register-form/index.vue';

createApp(App).use(createI18n({
    legacy: false,
    locale: 'en',
    fallbackRoot: 'en',
    messages: {en, ar}
})).use(veevalidate).mount('#app');