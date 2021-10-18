import { PaymentState } from "./store/state";
import { PluginOptions } from "@vpba/customer-interface";

import { paymentStore } from "./store";

export default (_, options: PluginOptions<PaymentState>) => {
  options.menuManager.addOption({
    title: "Payment",
    options: [
      {
        title: "Account",
        route: "/payment/debit",
      },
      {
        title: "Trasactions",
        route: "/payment/transactions",
      },
    ],
  });

  options.routeManager.registerRoute("main", {
    name: "payment-debit",
    path: "/payment/debit",
    component: null,
  });

  options.vuexManager.registerModule("payment", paymentStore);
};
