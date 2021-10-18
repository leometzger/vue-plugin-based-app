import { ThemeManager } from "@vpba/customer-interface";

export class MainThemeManager implements ThemeManager {
  primaryColor(color: string): ThemeManager {
    return this;
  }

  secondaryColor(color: string): ThemeManager {
    return this;
  }

  accentColor(color: string): ThemeManager {
    return this;
  }
}
