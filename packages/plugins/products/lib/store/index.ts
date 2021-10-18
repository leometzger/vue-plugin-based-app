import { Module } from "vuex";
import { productsState, ProductsState } from "./state";
import { RootState } from "@vpba/customer-interface";
import { productsActions } from "./actions";
import { productsMutations } from "./mutations";

export const productsStore: Module<ProductsState, RootState> = {
  namespaced: true,
  actions: productsActions,
  mutations: productsMutations,
  state: productsState,
};
