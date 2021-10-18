import { PaymentState } from "./store/state";
import { PluginOptions } from "@vpba/customer-interface";

import PaymentList from "./views/PaymentList.vue";
import { paymentStore } from "./store";

export default (_, options: PluginOptions<PaymentState>) => {
  options.menuManager.addOption({
    title: "Payments",
    route: "/payment/list",
  });

  options.routeManager.registerRoute("main", {
    name: "payment-list",
    path: "/payment/list",
    component: PaymentList,
  });

  options.vuexManager.registerModule("payment", paymentStore);
};
