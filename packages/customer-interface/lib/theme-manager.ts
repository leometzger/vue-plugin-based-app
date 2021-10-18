/**
 * Theme manager
 */
export interface ThemeManager {
  primaryColor(color: string): ThemeManager;
  secondaryColor(color: string): ThemeManager;
  accentColor(color: string): ThemeManager;
}
