import { RouteManager } from "@vpba/customer-interface";
import { Router, RouteRecordRaw } from "vue-router";

export class MainRouteManager implements RouteManager {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  registerRoute(parentName: string, route: RouteRecordRaw): RouteManager {
    this.router.addRoute(parentName, route);

    return this;
  }
}
