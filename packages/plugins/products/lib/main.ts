import { ProductsState } from "./store/state";
import { PluginOptions } from "@vpba/customer-interface";

import ProductList from "./views/ProductList.vue";
import { productsStore } from "./store";

export default (_, options: PluginOptions<ProductsState>) => {
  options.menuManager.addOption({
    title: "Products",
    route: "/products/list",
  });

  options.routeManager.registerRoute("main", {
    name: "product-list",
    path: "/products/list",
    component: ProductList,
  });

  options.vuexManager.registerModule("products", productsStore);
};
