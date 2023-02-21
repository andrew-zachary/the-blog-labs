import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import en from '../locales/en.json';
import ar from '../locales/ar.json';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

export default (app) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackRoot: 'en',
        messages: {en, ar}
    });
    app.use(i18n);
    app.use(PrimeVue);

    app.component('Dialog', Dialog);
    app.component('Button', Button);
}