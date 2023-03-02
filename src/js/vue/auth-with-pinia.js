import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '../../components/vue/auth-with-pinia/index.vue';

const piniaStore = createPinia();

createApp(App).use(piniaStore).mount('#app');