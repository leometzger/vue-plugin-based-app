import {
  PluginOptions,
  VuexManager,
  RouteManager,
  MenuManager,
  ThemeManager,
  RootState,
} from "@vpba/customer-interface";

import { Module, Store } from "vuex";

export class MainVuexManager<RootState> implements VuexManager<RootState> {
  private store: Store<RootState>;

  constructor(store: Store<RootState>) {
    this.store = store;
  }

  registerModule<T>(
    name: string,
    moduleRaw: Module<T, RootState>
  ): MainVuexManager<RootState> {
    this.store.registerModule(name, moduleRaw);

    return this;
  }
}
