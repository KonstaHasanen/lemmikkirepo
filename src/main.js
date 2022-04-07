import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    elain: {
      haku: 'dog',
      laji: 'Koira',
    },
  },
});

export default app;
