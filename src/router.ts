import Vue from "vue";
import Router from "vue-router";
import { data } from "./common/data";

Vue.use(Router);

let routers = [];
data.nav.forEach(x => {
  x.list.forEach(x2 =>
    routers.push({
      path: x2.path,
      name: x2.title,
      component: () => import(`./components${x2.path}/${x2.doc}.md`)
    })
  );
});
export default new Router({
  routes: [
    {
      path: "/",
      name: "home"
    },
    ...routers
  ]
});
