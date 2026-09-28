import { createContext, useContext, useState, type ReactNode } from "react";

import { loadThemeId, saveThemeId } from "../storage/theme";
import { themes, type ThemeId } from "../theme/themes";

const ThemeContext = createContext({
  theme: themes.white,
  setThemeId: (themeId: ThemeId) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState(loadThemeId);

  function setThemeId(nextThemeId: ThemeId) {
    setThemeIdState(nextThemeId);
    saveThemeId(nextThemeId);
  }

  return (
    <ThemeContext.Provider value={{ theme: themes[themeId], setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
