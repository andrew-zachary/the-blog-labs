import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import ProgressBar from 'primevue/progressbar';

import App from '../../components/vue/quiz-app/index.vue';

const quizeApp = createApp(App);
const piniaStore = createPinia();

quizeApp.component('ProgressBar', ProgressBar);

quizeApp.use(piniaStore).use(PrimeVue).mount('#app');