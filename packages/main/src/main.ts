import App from "./App.vue";
import Home from "./views/Home.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import PluginPayment from "@vpba/plugin-payment";
import PluginProducts from "@vpba/plugin-products";

import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHashHistory } from "vue-router";

import {
  MainMenuManager,
  MainRouteManager,
  MainThemeManager,
  MainVuexManager,
} from "./plugin-api/index";
import { PluginOptions, RootState } from "@vpba/customer-interface";

import MainLayout from "./layouts/MainLayout.vue";
import vuexStore from "./store/index";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

/**
 * Bootstraps the application
 */
function bootstrap() {
  const app = createApp(App);
  const router = createRouter({
    routes: [
      {
        path: "/",
        name: "main",
        component: MainLayout,
        children: [
          {
            path: "",
            name: "home",
            component: Home,
          },
        ],
      },
    ],
    history: createWebHashHistory(),
  });
  const store = createStore(vuexStore);
  const options: PluginOptions<RootState> = {
    menuManager: new MainMenuManager(store),
    themeManager: new MainThemeManager(),
    routeManager: new MainRouteManager(router),
    vuexManager: new MainVuexManager(store),
  };

  app.use(ElementPlus);
  app.use(store);
  app.use(router);

  if (urlParams.get("withProducts")) {
    app.use(PluginProducts, options);
  }
  if (urlParams.get("withPayment")) {
    app.use(PluginPayment, options);
  }

  app.mount("#app");
}

bootstrap();
