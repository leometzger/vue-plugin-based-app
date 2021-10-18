import { Module } from "vuex";
import { LayoutState, layoutState } from "./state";
import { layoutMutations } from "./mutations";
import { RootState } from "@vpba/customer-interface";

export const layout: Module<LayoutState, RootState> = {
  namespaced: true,
  state: layoutState,
  mutations: layoutMutations,
};
