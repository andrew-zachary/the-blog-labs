import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

import App from '../../components/vue/transitions-and-animations/index.vue';

const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('Button', Button);

app.mount('#app');