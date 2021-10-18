import { MenuManager, MenuOption } from "@vpba/customer-interface";

export class MainMenuManager implements MenuManager {
  getOptions(): MenuOption[] {
    throw new Error("Method not implemented.");
  }

  addOption(option: MenuOption): MenuOption[] {
    throw new Error("Method not implemented.");
  }
}
