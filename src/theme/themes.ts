export type ThemeId = "white" | "green" | "blue" | "black" | "purple" | "red";

export type ThemeColors = {
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  header: string;
  headerText: string;
  accent: string;
  onAccent: string;
};

export type Theme = {
  id: ThemeId;
  name: string;
  isDark: boolean;
  statusBarStyle: "light" | "dark";
  colors: ThemeColors;
};

export const themes: Record<ThemeId, Theme> = {
  white: {
    id: "white",
    name: "White",
    isDark: false,
    statusBarStyle: "dark",
    colors: {
      background: "#FFFFFF",
      surface: "#F4F4F5",
      border: "#E4E4E7",
      text: "#18181B",
      textMuted: "#71717A",
      header: "#F4F4F5",
      headerText: "#18181B",
      accent: "#27272A",
      onAccent: "#FFFFFF",
    },
  },
  green: {
    id: "green",
    name: "Green",
    isDark: false,
    statusBarStyle: "light",
    colors: {
      background: "#F3F8F4",
      surface: "#FFFFFF",
      border: "#D5E5D8",
      text: "#14261A",
      textMuted: "#5B7162",
      header: "#2E7D4F",
      headerText: "#FFFFFF",
      accent: "#2E7D4F",
      onAccent: "#FFFFFF",
    },
  },
  blue: {
    id: "blue",
    name: "Blue",
    isDark: false,
    statusBarStyle: "light",
    colors: {
      background: "#F2F5FC",
      surface: "#FFFFFF",
      border: "#D6DEF0",
      text: "#111A33",
      textMuted: "#5A6682",
      header: "#4F52E0",
      headerText: "#FFFFFF",
      accent: "#4F52E0",
      onAccent: "#FFFFFF",
    },
  },
  black: {
    id: "black",
    name: "Black",
    isDark: true,
    statusBarStyle: "light",
    colors: {
      background: "#000000",
      surface: "#141414",
      border: "#2A2A2A",
      text: "#F5F5F5",
      textMuted: "#A1A1AA",
      header: "#111111",
      headerText: "#F5F5F5",
      accent: "#F5F5F5",
      onAccent: "#000000",
    },
  },
  purple: {
    id: "purple",
    name: "Purple",
    isDark: true,
    statusBarStyle: "light",
    colors: {
      background: "#120B1C",
      surface: "#1E1530",
      border: "#33264D",
      text: "#F2ECFA",
      textMuted: "#A99CC0",
      header: "#5B0FA6",
      headerText: "#FFFFFF",
      accent: "#8B3DFF",
      onAccent: "#FFFFFF",
    },
  },
  red: {
    id: "red",
    name: "Red",
    isDark: true,
    statusBarStyle: "light",
    colors: {
      background: "#160A0A",
      surface: "#251313",
      border: "#432222",
      text: "#FBEDED",
      textMuted: "#BFA0A0",
      header: "#9F1D1D",
      headerText: "#FFFFFF",
      accent: "#D83A3A",
      onAccent: "#FFFFFF",
    },
  },
};

export const defaultThemeId: ThemeId = "white";

export const lightThemes = Object.values(themes).filter((theme) => !theme.isDark);
export const darkThemes = Object.values(themes).filter((theme) => theme.isDark);
