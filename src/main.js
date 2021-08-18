import App from "./components/App.svelte";

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() { },
  onOfflineReady() { },
})

const app = new App({
  target: document.body,
});

export default app;