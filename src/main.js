import { createApp } from 'vue'
import App from './App.vue'

import * as Sentry from "@sentry/vue";

Sentry.init({
  App,
  dsn: "https://81721dfec08a4db59f95fcb62102adcb@o4504062791647232.ingest.sentry.io/4504095310544896",
  autoSessionTracking: false // default: true
});

createApp(App).mount('#app')
  