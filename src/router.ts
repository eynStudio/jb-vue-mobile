import Vue from "vue";
import Router from "vue-router";
import { data } from "./common/data";

Vue.use(Router);

let routers = [];
let demoRouters = [];

data.nav.forEach(x => {
  x.list.forEach(x2 => {
    routers.push({
      path: x2.path,
      name: x2.title,
      component: () => import(`./components${x2.path}/${x2.doc}.md`)
    });

    demoRouters.push({
      path: x2.path,
      name: x2.title,
      component: () => import(`./components${x2.path}/demo/index`)
    });
  });
});

export const DocRouter = new Router({
  routes: [
    {
      path: "/",
      name: "home"
    },
    ...routers
  ]
});

export const DemoRouter = new Router({
  routes: [
    {
      path: "/",
      name: "home"
    },
    ...demoRouters
  ]
});
