import { ThemeManager } from "@vpba/customer-interface";

export class MainThemeManager implements ThemeManager {
  primaryColor(color: string): ThemeManager {
    throw new Error("Method not implemented.");
  }

  secondaryColor(color: string): ThemeManager {
    throw new Error("Method not implemented.");
  }

  accentColor(color: string): ThemeManager {
    throw new Error("Method not implemented.");
  }
}
