import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { IndexHeaderActions, SettingsButton } from "../components/HeaderActions";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function ThemedStack() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style={theme.statusBarStyle} />
      <Stack
        screenOptions={{
          title: "Criminal Intent",
          headerStyle: { backgroundColor: theme.colors.header },
          headerTintColor: theme.colors.headerText,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: theme.colors.background },
          headerRight: () => <SettingsButton />,
        }}
      >
        <Stack.Screen name="index" options={{ headerRight: () => <IndexHeaderActions /> }} />
        <Stack.Screen name="crime/[id]" options={{ title: "Crime Details" }} />
        <Stack.Screen name="settings" options={{ title: "Settings", headerRight: () => null }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}
