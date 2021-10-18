import { MenuManager, MenuOption, RootState } from "@vpba/customer-interface";
import { Store } from "vuex";

export class MainMenuManager implements MenuManager {
  private store: Store<RootState>;

  constructor(store: Store<RootState>) {
    this.store = store;
  }

  getOptions(): MenuOption[] {
    return [];
  }

  addOption(option: MenuOption): MenuOption[] {
    this.store.commit("layout/addMenuOption", option);

    return this.store.state.layout.menuOptions;
  }
}
