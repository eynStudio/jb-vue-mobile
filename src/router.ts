import Vue from "vue";
import Router from "vue-router";
import { Test } from "./views/Test";
import Button from "./components/button/Button.md";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home"
    },
    { path: "/test", name: "test", component: Test },
    { path: "/button", name: "button", component: Button }
  ]
});
