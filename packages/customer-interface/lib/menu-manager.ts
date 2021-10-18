/**
 * Composite of menu options
 */
export interface MenuOption {
  title: string;
  route?: string;
  options?: Array<MenuOption>;
}

/**
 * Menu Options manager
 */
export interface MenuManager {
  /**
   * Return all menu options
   */
  getOptions(): Array<MenuOption>;

  /**
   * Add an option to menu.
   * It can contain suboption as well
   */
  addOption(option: MenuOption): Array<MenuOption>;
}
