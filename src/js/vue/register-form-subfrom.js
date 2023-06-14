import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

import ProgressBar from 'primevue/progressbar';

import App from '../../components/vue/register-form-subform/index.vue';

const registerFormSubform = createApp(App);

registerFormSubform.component('ProgressBar', ProgressBar);

registerFormSubform.use(PrimeVue).mount('#app');