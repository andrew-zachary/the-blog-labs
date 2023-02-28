import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

//includes
import veevalidate from './plugins/veevalidate.js';

//locales
import en from '../../locales/en.json';
import ar from '../../locales/ar.json';

import App from '../../components/vue/multilingual-register-form/index.vue';

//parts
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackRoot: 'en',
    messages: {en, ar}
});

createApp(App).use(i18n).use(veevalidate).mount('#app');