import { createApp } from 'vue'
import App from './App.vue'

import * as Sentry from "@sentry/vue";
// import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  App,
  dsn: "https://81721dfec08a4db59f95fcb62102adcb@o4504062791647232.ingest.sentry.io/4504095310544896",
  // integrations: [
  //   new BrowserTracing({
  //     routingInstrumentation: Sentry.vueRouterInstrumentation(router),
  //     tracingOrigins: ["localhost", "my-site-url.com", /^\//],
  //   }),
  // ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  // tracesSampleRate: 1.0,
});

createApp(App).mount('#app')
  