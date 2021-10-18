import { MenuManager } from "./menu-manager";
import { RouteManager } from "./router-manager";
import { ThemeManager } from "./theme-manager";
import { VuexManager, RootState } from "./vuex-manager";

export * from "./menu-manager";
export * from "./router-manager";
export * from "./theme-manager";
export * from "./vuex-manager";

/**
 * Customizations for the vue application
 */
export interface PluginOptions<T> {
  menuManager: MenuManager;
  themeManager: ThemeManager;
  routeManager: RouteManager;
  vuexManager: VuexManager<T>;
}
