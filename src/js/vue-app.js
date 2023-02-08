import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ar from '../locales/ar.json';

export default (app) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackRoot: 'en',
        messages: {en, ar}
    });
    app.use(i18n);
}