/*
 * @Author: XunL
 * @Description:
 */
import { VueConstructor } from "vue";
import VueRouter from "vue-router";
import wpsView from "./page/index.vue";

export default {
  install(Vue: VueConstructor, options: { router: VueRouter; route: any }):void {
    const { route, router } = options;
    console.log(route)
    router.addRoutes([
      Object.assign({}, route, {
        component: wpsView,
      }),
    ]);
  },
};
