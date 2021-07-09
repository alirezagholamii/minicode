import { createApp } from 'vue'
import App from './App.vue'
import VeeValidationPlugin from './includes/validation'

const app = createApp(App);
app.use(VeeValidationPlugin);
app.mount('#app');
