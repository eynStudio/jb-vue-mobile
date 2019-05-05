import Vue from "vue";
import { Demo } from "./views/Demo";
import { DemoRouter } from "./router";

Vue.config.productionTip = false;

new Vue({
  router: DemoRouter,
  render: h => h(Demo)
}).$mount("#app");
