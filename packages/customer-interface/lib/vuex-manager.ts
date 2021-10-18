import { Module } from "vuex";

export interface RootState {}

/**
 * Vuex storage manager
 */
export interface VuexManager<T> {
  registerModule(name: string, options: Module<T, RootState>): VuexManager<T>;
}
