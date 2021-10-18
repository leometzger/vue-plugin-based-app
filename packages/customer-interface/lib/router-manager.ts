import { RouteRecordRaw } from "vue-router";

/**
 * Route registration Manager
 */
export interface RouteManager {
  registerRoute(parentName: string, route: RouteRecordRaw): RouteManager;
}
