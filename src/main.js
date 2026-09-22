import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { Button } from 'primevue';
import Aura from '@primeuix/themes/aura'
import Tooltip from 'primevue/tooltip';
import { registerSW } from 'virtual:pwa-register';
import 'primeicons/primeicons.css'

let app=createApp(App);
app.use(PrimeVue ,{
  theme: {
    preset: Aura
  }
});
app.directive('tooltip', Tooltip);
app.mount('#app');
app.component('Button',Button);

const updateSW=registerSW({
  onNeedRefresh(){
    let a=confirm("Eine neue Version ist verfügbar. Willst du aktualisieren (empfohlen!)?");
    if(a){
      updateSW();
    }
  },
  onOfflineReady(){
    console.log("offline ready");
  }
});