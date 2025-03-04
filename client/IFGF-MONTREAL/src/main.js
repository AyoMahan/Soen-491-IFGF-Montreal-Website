import './assets/main.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { clerkPlugin } from '@clerk/vue'

const app = createApp(App);
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

app.use(createPinia());
app.use(router);

// Use Clerk plugin
app.use(clerkPlugin, { publishableKey: clerkPubKey });

app.mount('#app');
