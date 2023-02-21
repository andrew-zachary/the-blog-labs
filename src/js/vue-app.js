import { createApp } from 'vue';

//includes
import veevalidate from './vue-app-veevalidate-plugin.js';

import App from '../components/vue/multilingual-register-form/index.vue';

createApp(App).use(veevalidate).mount('#app');