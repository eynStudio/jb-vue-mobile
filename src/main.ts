import Vue from "vue";
import { App } from "./views/App";
import { DocRouter } from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router: DocRouter,
  render: h => h(App)
}).$mount("#app");
