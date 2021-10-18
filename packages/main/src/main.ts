import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import ElementPlus from "element-plus";
import PluginPayment from "@vpba/plugin-payment";

import {
  MainMenuManager,
  MainRouteManager,
  MainThemeManager,
  MainVuexManager,
} from "./plugin-api/index";
import { PluginOptions, RootState } from "@vpba/customer-interface";

function bootstrap() {
  const app = createApp(App);
  const router = createRouter({
    routes: [],
    history: createWebHashHistory(),
  });
  const store = createStore({});
  const options: PluginOptions<RootState> = {
    menuManager: new MainMenuManager(),
    themeManager: new MainThemeManager(),
    routeManager: new MainRouteManager(router),
    vuexManager: new MainVuexManager(store),
  };

  app.use(ElementPlus);
  app.use(store);
  app.use(router);

  app.use(PluginPayment, options);

  app.mount("#app");
}

bootstrap();
