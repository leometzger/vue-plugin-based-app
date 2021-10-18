import { LayoutState } from "./state";
import { MenuOption } from "@vpba/customer-interface";

import { MutationTree } from "vuex";

export const layoutMutations: MutationTree<LayoutState> = {
  addMenuOption(state: LayoutState, menuOption: MenuOption) {
    state.menuOptions.push(menuOption);
  },

  addSubOption() {},
};
