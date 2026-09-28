import Storage from "expo-sqlite/kv-store";

import { defaultThemeId, type ThemeId } from "../theme/themes";

const THEME_KEY = "theme";

export function loadThemeId(): ThemeId {
  return (Storage.getItemSync(THEME_KEY) as ThemeId) ?? defaultThemeId;
}

export function saveThemeId(themeId: ThemeId) {
  Storage.setItemSync(THEME_KEY, themeId);
}
