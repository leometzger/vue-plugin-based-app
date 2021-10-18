import { Module } from "vuex";
import { paymentState, PaymentState } from "./state";
import { RootState } from "@vpba/customer-interface";
import { paymentActions } from "./actions";
import { paymentMutations } from "./mutations";

export const paymentStore: Module<PaymentState, RootState> = {
  namespaced: true,
  actions: paymentActions,
  mutations: paymentMutations,
  state: paymentState,
};
