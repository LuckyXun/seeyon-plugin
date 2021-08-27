/* eslint-disable @typescript-eslint/no-empty-interface */
/*
 * @Author: XunL
 * @Description:
 */

import Vue, { VNode } from "vue";
import VueRouter from "vue-router";
import { Route } from "vue-router";

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $api: any;
  }
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
